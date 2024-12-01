import React from "react";

const Gallery = ({ photos }) => (
  <section className="p-8 bg-artistic-bg">
    <h2 className="text-3xl font-bold text-center text-highlight mb-8">My Portfolio</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={photo}
            alt={`Art piece ${index + 1}`}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
            <p className="text-white text-lg font-semibold">Art Piece {index + 1}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
