import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://cpd-platform-production-assets.s3.eu-west-1.amazonaws.com/blog/istockphoto-627540386-612x612-(1).jpg",
  "https://c02.purpledshub.com/uploads/sites/41/2024/05/Red-Panda.jpg?webp=1&w=1200",
  "https://www.indianapoliszoo.com/wp-content/uploads/2024/04/Rhino-Gloria-Fred-Cate-2048x1463.webp",
  "https://media.istockphoto.com/id/119356838/photo/heads-of-two-giraffes-in-front-of-green-trees.jpg?s=612x612&w=0&k=20&c=2IUO6JGjqyhR3vDGsHMxHI9Ey0kTppOXiyx5RtceKAM=",
  "https://allthatsinteresting.com/wordpress/wp-content/uploads/2011/12/cute-animal-red-panda-5.jpg",
  "https://images.prestigeonline.com/wp-content/uploads/sites/5/2024/11/26074009/467567425_981374690697689_8094679264944545116_n-1549x900.jpeg",
];

export function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl h-64 md:h-96 mx-auto overflow-hidden rounded-2xl shadow-lg mt-10">
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-full object-cover transition-opacity duration-700"
      />

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              idx === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
