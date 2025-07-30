import { useState } from "react";

const images = [
  "./gapura.svg",
  "./carousel_2.svg",
  "./carousel_3.svg",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full  mx-auto overflow-hidden shadow-lg">
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover transition duration-700"
        />
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-2 py-1 rounded text-2xl"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white px-2 py-1 rounded text-2xl"
      >
        →
      </button>
    </div>
  );
}
