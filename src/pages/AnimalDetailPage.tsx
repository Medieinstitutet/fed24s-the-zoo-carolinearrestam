import { useParams, Link } from "react-router-dom";
import { useAnimalContext } from "../context/AnimalContext";
import { ErrorImage } from "../components/ErrorImage";
import { getFeedingStatus } from "../utils/feedingUtils";

export function AnimalDetailPage() {
  const { id } = useParams();
  const { state, dispatch } = useAnimalContext();

  const animal = state.animals.find((a) => a.id === Number(id));
  if (!animal) return <p>Djur med id {id} hittades inte.</p>;

  const { isHungry, warning, hoursSinceFed } = getFeedingStatus(animal.lastFed, "detail");

  const feedAnimal = () => {
    dispatch({ type: "FEED_ANIMAL", payload: animal.id });
  };

  return (
    <div className="max-w-xl mx-auto m-10 bg-white rounded-xl shadow p-6">
      <ErrorImage
        src={animal.imageUrl}
        alt={animal.name}
        name={animal.name}
        className="w-full h-74 object-contain rounded"
      />
      <h1 className="text-2xl font-bold my-4">{animal.name}</h1>
      <p>{animal.longDescription}</p>
      <p className="mt-2 text-sm text-gray-500">
        Senast matad: {new Date(animal.lastFed).toLocaleTimeString("sv-SE")}
      </p>

      {isHungry ? (
        <button
          onClick={feedAnimal}
          className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full shadow hover:scale-105 transition"
        >
          Mata {animal.name}
        </button>
      ) : (
        <button
          disabled
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-600 rounded-full"
        >
          Mätt (vänta {Math.ceil(4 - hoursSinceFed)} h)
        </button>
      )}

      {warning && (
        <p className="mt-2 text-orange-600">🟠 Djuret börjar bli hungrigt!</p>
      )}

      <div className="mt-6">
        <Link to="/animals" className="text-black hover:underline">
          ← Tillbaka till alla djur
        </Link>
      </div>
    </div>
  );
}