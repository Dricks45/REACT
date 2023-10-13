import { useState } from "react";
import PokemonCard from "./components/PokemonCard.jsx";
import NavBar from "./components/NavBar.jsx";


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleFormer = () => {
    setPokemonIndex(pokemonIndex - 1)
};

const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1)
};

const pokemon = pokemonList[pokemonIndex];

  return  (
    <>
      <div>
        <PokemonCard pokemon={pokemon}/>
        <NavBar
        pokemonIndex={pokemonIndex}
        handleFormer={handleFormer}
        handleNext={handleNext}
        pokemon={pokemonList}
        />
      </div>
    </>
  );
}


export default App;