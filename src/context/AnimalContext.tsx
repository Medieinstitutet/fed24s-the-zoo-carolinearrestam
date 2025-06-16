import { createContext, useContext, useReducer, useEffect } from "react";
import { animalReducer, initialState} from "../reducers/animalReducer";
import type { State, Action } from "../reducers/animalReducer";
import { getAnimals } from "../services/animalService";

const STORAGE_KEY = "zoo_animals";

const AnimalContext = createContext<{ state: State; dispatch: React.Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

function load() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? (JSON.parse(data) as State["animals"]) : null;
  } catch {
    return null;
  }
}

export const AnimalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(animalReducer, initialState);

  useEffect(() => {
    const fromStorage = load();
    if (fromStorage && fromStorage.length) {
      dispatch({ type: "FETCH_SUCCESS", payload: fromStorage });
    } else {
      getAnimals()
        .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
        .catch(() => dispatch({ type: "FETCH_ERROR", payload: "Kunde inte hämta djur." }));
    }
  }, []);

  useEffect(() => {
    if (!state.loading) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.animals));
    }
  }, [state.animals, state.loading]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch({ type: "UPDATE_TIME" });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimalContext.Provider value={{ state, dispatch }}>
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimalContext = () => useContext(AnimalContext);
