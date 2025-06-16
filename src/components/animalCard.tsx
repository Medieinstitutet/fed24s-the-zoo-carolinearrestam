import { Link } from "react-router-dom";
import { useAnimalContext } from "../context/AnimalContext";
import { ErrorImage } from "./ErrorImage";
import { getFeedingStatus } from "../utils/feedingUtils";

type Props = {
  animalId: number;
};

export default function AnimalCard({ animalId }: Props) {
  const { state } = useAnimalContext();
  const animal = state.animals.find((a) => a.id === animalId);

  if (!animal) return null;

  const status = getFeedingStatus(animal.lastFed, "overview");

  return (
    <Link to={`/animals/${animal.id}`} className="block bg-white rounded-xl shadow hover:shadow-lg transition p-4">
      <ErrorImage
        src={animal.imageUrl}
        alt={animal.name}
        name={animal.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-xl font-semibold">{animal.name}</h2>
      <p className="text-gray-600">{animal.shortDescription}</p>
      <p className="mt-2 text-sm text-gray-500">{status}</p>
    </Link>
  );
}
