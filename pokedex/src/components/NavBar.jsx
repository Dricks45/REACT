import PropTypes from "prop-types";

function NavBar (props) {
    const {pokemonList, setPokemonList} = props;

    return (
        <>
        {pokemonList.map((pokemon, index) => (
            <button key= {index} onClick={() => 
            setPokemonList(index)}>{pokemon.name}</button>
        ))}
        </>
    );
}

export default NavBar;