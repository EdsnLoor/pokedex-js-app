// Define the API endpoint URL
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Function to fetch the Pokemon data from the API
async function fetchPokemonData() {
    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract the list of Pokemon from the response
        const pokemon = data.results;

        // Loop through the list of Pokemon and fetch additional data
        for (const pokemonData of pokemon) {
            // Fetch the additional data for this Pokemon
            const pokemonResponse = await fetch(pokemonData.url);
            const pokemonDataFull = await pokemonResponse.json();

            // Extract the name, height, types, and moves from the response
            const name = pokemonDataFull.name;
            const height = pokemonDataFull.height
            let typesNames = pokemonDataFull.types.map((type) => type.type.name);
            let movesNames = pokemonDataFull.moves.map((move) => move.move.name);

            // Create an object for this Pokémon and add it to the pokemonData object
            let pokemon= { pokemonName:name, height:height, types:typesNames, moves:movesNames};
            console.log(pokemon)
        }

    } catch (error) {
        // If there's an error, display a message to the user
        console.error(error);
        errorMessage.textContent = 'An error occurred while fetching Pokemon data.';
    }
}

// Call the fetchPokemonData function when the page loads
fetchPokemonData();
