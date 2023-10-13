import PropTypes from "prop-types";

function NavBar (props) {

    return (
        <>
            {props.pokemonIndex > 0 && <button onClick={props.handleFormer}>Précédente</button>}

            {props.pokemonIndex < props.pokemon.length -1 && <button onClick={props.handleNext}>Suivante</button>}
        </>
    );
}

NavBar.propTypes = {
    pokemon: PropTypes.shape({
    pokemonIndex: PropTypes.string.isRequired,
    handleFormer: PropTypes.func.isRequired,
    handleNext: PropTypes.func.isRequired,
    }).isRequired,
}

export default NavBar;