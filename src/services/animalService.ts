export interface Animal {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  lastFed: string;
  isFed: boolean;
}

export async function getAnimals(): Promise<Animal[]> {
  const res = await fetch("https://animals.azurewebsites.net/api/animals");
  if (!res.ok) throw new Error("Kunde inte hämta djur.");
  return res.json();
}
