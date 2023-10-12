import PropTypes from "prop-types";

function PokemonCard({altpokemon}) {
    console.log(altpokemon)

    return (
        <figure>
            {altpokemon.imgSrc ? (
                <img src={altpokemon.imgSrc} alt={altpokemon.name} />
            ) : (
                <p>???</p>
            )}
            <figcaption>{altpokemon.name}</figcaption>
        </figure>
    );
}

PokemonCard.propTypes = {
    altpokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}

export default PokemonCard;