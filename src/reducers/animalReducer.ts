import type { Animal } from "../services/animalService";

export type State = {
  animals: Animal[];
  loading: boolean;
  error: string | null;
  now: Date;
};

export type Action =
  | { type: "FETCH_SUCCESS"; payload: Animal[] }
  | { type: "FETCH_ERROR"; payload: string }
  | { type: "FEED_ANIMAL"; payload: number }
  | { type: "UPDATE_TIME" };

export const initialState: State = {
  animals: [],
  loading: true,
  error: null,
  now: new Date(),
};

export function animalReducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, animals: action.payload, loading: false, error: null };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    case "FEED_ANIMAL":
      return {
        ...state,
        animals: state.animals.map((a) =>
          a.id === action.payload
            ? { ...a, lastFed: new Date().toISOString() }
            : a
        ),
      };
    case "UPDATE_TIME":
      return { ...state, now: new Date() };
    default:
      return state;
  }
}
