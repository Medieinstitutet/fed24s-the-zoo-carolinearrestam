import { Link } from "react-router";
import { animalFacts } from "../utils/animalFacts";
import { useEffect, useState } from "react";
import { Carousel } from "../components/Carousel";

export function HomePage() {
  const [randomFact, setRandomFact] = useState("");

    useEffect(() => {
    const fact = animalFacts[Math.floor(Math.random() * animalFacts.length)];
    setRandomFact(fact);
  }, []);

  return (
    <section className="h-full mb-10 flex flex-col items-center justify-center text-black">
      <div className="text-center w-screen h-full">
        
        <section className="w-md max-w-4xl mb-8 mx-auto">
          <Carousel />
        </section>

        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          Välkommen till <span className=" text-green-700">The Zoo Hub</span>
        </h1>

        <p className="text-lg md:text-xl mb-10">
          Här hittar du alla våra djurvänner 🐾 <br />
          Lär känna dem och glöm för fasiken inte att ge dem mat när de är hungriga!
        </p>

        <div
          className="bg-yellow-50 p-4 rounded-xl shadow-md max-w-xl mx-auto mb-8 w-sm cursor-pointer"
          onClick={() => {
            const fact = animalFacts[Math.floor(Math.random() * animalFacts.length)];
            setRandomFact(fact);
          }}
          title="Klicka för en ny djurfakta"
        >
          <h2 className="text-xl font-semibold mb-2">Visste du att... 🦉</h2>
          <p className="italic text-gray-700">{randomFact}</p>
        </div>

        <Link
          to="/animals"
          className="bg-green-700 hover:bg-green-700 transition-colors text-white px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 duration-200 inline-block"
        >
          Se våra djur 🦁
        </Link>
      </div>
    </section>
  );
}
