let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    // Get all the Pokémon
    function getAll() {
        return pokemonList;
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

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.other.dream_world.front_default;
            item.height = details.height;
            item.type = details.types.map((type) => type.type.name);
        }).catch(function (e) {
            console.error(e);
        });
    }

    // Shows Pokémon individual details
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem : addListItem,
        loadList : loadList,
        loadDetails : loadDetails
    };
})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
});
