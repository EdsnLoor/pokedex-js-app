let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // Get all the Pokémon
    function getAll() {
        return pokemonList;
    }
    function loadList() {
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                const promises = json.results.map(function (item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url
                    };
                    return fetch(pokemon.detailsUrl)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (details) {
                            // Add the details to the pokemon object
                            pokemon.imageUrl = details.sprites.other.dream_world.front_default;
                            pokemon.height = details.height;
                            pokemon.type = details.types.map((type) => type.type.name);
                            console.log(pokemon)
                            return pokemon;
                        })
                        .catch(function (e) {
                            console.error(e);
                        });
                });
            });

    }

    function addListItem(pokemon){
        // setting variables
        let pokemonList = document.querySelector(".container");
        let listPokemon = document.createElement("span");
        let button = document.createElement("button");

        // creating a button for each Pokémon
        button.innerText = pokemon.name;
        button.classList.add("type");
        // let pokemonType = pokemon.type[0];
        // button.classList.add(pokemonType);
        button.classList.add("left");
        listPokemon.appendChild(button)
        pokemonList.appendChild(listPokemon)
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }
    // Shows Pokémon individual details
    function showDetails(pokemon) {
        loadList(pokemon).then(function () {
            console.log(pokemon);
        });
    }

    return {
        getAll: getAll,
        addListItem : addListItem,
        loadList : loadList,
    };
})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});
