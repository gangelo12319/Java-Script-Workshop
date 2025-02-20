import React from "react";

const PokemonCard = ({ name, image, type }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4 border-4 border-yellow-400">
      <div className="flex justify-center">
        <img className="w-32 h-32 object-cover" src={image} alt={name} />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 mt-1">Type: {type}</p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <PokemonCard 
        name="Pikachu" 
        image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" 
        type="Electric" 
      />
    </div>
  );
};

export default App;
