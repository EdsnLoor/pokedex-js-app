let pokemonRepository = (function () {
    let pokemonList = [
        { name: "Bulbasaur", height: 7, type: ["grass", "poison"] },
        { name: "Ivysaur", height: 1, type: ["grass", "poison"] },
        { name: "Venusaur", height: 0.3, type: ["grass", "poison"] },
        { name: "Groudon", height: 3.5, type: ["ground"] },
        { name: "Charmander", height: 2.9, type: ["fire"] },
        { name: "Charmeleon", height: 0.6, type: ["fire"] },
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    // Get all the Pokémon
    function getAll() {
        return pokemonList;
    }
    function addListItem(pokemon){
        // setting variables
        let pokemonList = document.querySelector(".pokemon-list");
        let listPokemon = document.createElement("li");
        let button = document.createElement("button");

        // creating a button for each Pokémon
        button.innerText = pokemon.name;
        button.classList.add("button-class")
        listPokemon.appendChild(button)
        pokemonList.appendChild(listPokemon)
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });
    }

    // Shows Pokémon individual details
    function showDetails(pokemon) {
        console.log(pokemon)
    }

    return {
        add: add,
        getAll: getAll,
        addListItem : addListItem
    };
})();

pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
});
