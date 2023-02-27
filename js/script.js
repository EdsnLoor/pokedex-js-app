// Define the API endpoint URL
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Select the DOM elements we'll be using to display the results
const pokemonList = document.querySelector('#pokemon-list');
const errorMessage = document.querySelector('#error-message');

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

            // Extract the name, abilities, and moves from the response
            const name = pokemonDataFull.name;
            const abilities = pokemonDataFull.abilities.map(ability => ability.ability.name);
            const moves = pokemonDataFull.moves.map(move => move.move.name);

            // Create a list item element for this Pokemon and add it to the DOM
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${name}</strong><br>Abilities: ${abilities.join(', ')}<br>Moves: ${moves.join(', ')}`;
            pokemonList.appendChild(listItem);
        }
    } catch (error) {
        // If there's an error, display a message to the user
        console.error(error);
        errorMessage.textContent = 'An error occurred while fetching Pokemon data.';
    }
}

// Call the fetchPokemonData function when the page loads
fetchPokemonData();
