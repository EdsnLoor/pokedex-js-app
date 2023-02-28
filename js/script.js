// Define the API endpoint URL
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const errorMessage = document.querySelector('#error-message');
const pokemonList = document.querySelector('#pokemon-list');

// Function to fetch the Pokemon data from the API
async function fetchPokemonData() {
    let note;
    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Extract the list of Pokemon from the response
        const pokemon = data.results;

        // Empty array to store the Pokemon data
        const pokemonRepository = [];

// Loop through the list of Pokemon and fetch additional data
        for (const pokemonData of pokemon) {
            // Fetch the additional data for this Pokemon
            const pokemonResponse = await fetch(pokemonData.url);
            const pokemonDataFull = await pokemonResponse.json();

            // Extract the height and types from the response
            const height = pokemonDataFull.height;
            const types = pokemonDataFull.types;

            // Map the types array to extract just the type names
            const typesNames = types.map(type => type.type.name);

            // Extract the moves from the response
            const moves = pokemonDataFull.moves;

            // Map the moves array to extract just the move names
            const movesNames = moves.map(move => move.move.name);

            // Create a new object with the Pokemon's name, height, types, and moves
            const pokemonList = {
                pokemonName: pokemonData.name.toUpperCase(),
                height: height,
                types: typesNames,
                moves: movesNames
            };

            // Add the new object to the array of Pokemon data
            pokemonRepository.push(pokemonList);
        }
        // Display the Pokemon data on the page
        for (const pokemon of pokemonRepository) {
            if (pokemon.height > 10) {
                note = 'This is a special Pokemon'
            } else {
                note = ''
            }
            const listItemName = document.createElement('li');
            listItemName.textContent = `${pokemon.pokemonName} - ${note}`;

            const listItemHeight = document.createElement('span');
            listItemHeight.textContent = `HEIGHT: ${pokemon.height}`;

            const listItemType = document.createElement('span');
            listItemType.textContent = `TYPES: ${pokemon.types.join(', ')}`;

            const listItemMoves = document.createElement('span');
            listItemMoves.textContent = `MOVES: ${pokemon.moves.join(', ')}`;


            pokemonList.appendChild(listItemName);
            pokemonList.appendChild(listItemHeight);
            pokemonList.appendChild(document.createElement('br'));
            pokemonList.appendChild(listItemType);
            pokemonList.appendChild(document.createElement('br'));
            pokemonList.appendChild(listItemMoves);
            pokemonList.appendChild(document.createElement('br'));
            pokemonList.appendChild(document.createElement('br'));
            pokemonList.appendChild(document.createElement('br'));
            pokemonList.appendChild(document.createElement('br'));

        }

    } catch (error) {
        // If there's an error, display a message to the user
        console.error(error);
        errorMessage.textContent = 'An error occurred while fetching Pokemon data.';
    }
}

// Call the fetchPokemonData function when the page loads
fetchPokemonData();
