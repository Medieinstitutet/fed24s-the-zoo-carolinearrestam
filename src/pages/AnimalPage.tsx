import { useAnimalContext } from "../context/AnimalContext";
import AnimalCard from "../components/animalCard";

export function AnimalsPage() {
  const { state } = useAnimalContext();
  const { animals, loading, error } = state;

  if (loading) return <p>Laddar...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {animals.map((a) => (
          <AnimalCard key={a.id} animalId={a.id} />
        ))}
      </div>
    </div>
  );
}