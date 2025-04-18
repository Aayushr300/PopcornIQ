import React, { useEffect, useState } from "react";

const images = [
  {
    url: "https://wallpapercave.com/wp/wp9027513.jpg",
    title: "Avengers Endgame",
  },
  {
    url: "https://wallpapercave.com/wp/wp9040035.jpg",
    title: "Spider-Man: No Way Home",
  },
  {
    url: "https://wallpapercave.com/wp/wp1917114.jpg",
    title: "Iron Man",
  },
];

function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="relative h-[50vh] md:h-[40vh] lg:h-[70vh] overflow-hidden">
      <img
        src={images[current].url}
        alt={images[current].title}
        className="w-full h-full object-cover transition duration-700"
      />

      {/* Title Overlay */}
      <div className="absolute bottom-0 w-full bg-black/60 text-white text-center text-xl md:text-2xl p-4 font-semibold">
        {images[current].title}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        &#10095;
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition ${
              current === idx ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Banner;
