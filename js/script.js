let pokemonRepository = (function () {
    let pokemonList = [
        { name: "Bulbasaur", height: 7, type: ["normal", "fire"] },
        { name: "Ivysaur", height: 1, type: ["electric", "water"] },
        { name: "Venusaur", height: 0.3, type: ["grass", "ice"] },
        { name: "Groudon", height: 3.5, type: ["ground"] },
        { name: "Charmander", height: 2.9, type: ["flying"] },
        { name: "Charmeleon", height: 0.6, type: ["ghost"] },
        { name: "Bulbasaur", height: 7, type: ["rock", "poison"] },
        { name: "Ivysaur", height: 1, type: ["fighting", "poison"] },
        { name: "Venusaur", height: 0.3, type: ["poison", "poison"] },
        { name: "Groudon", height: 3.5, type: ["psychic"] },
        { name: "Charmander", height: 2.9, type: ["bug"] },
        { name: "Charmeleon", height: 0.6, type: ["fire"] },
        { name: "Charmander", height: 2.9, type: ["water"] },
        { name: "Charmeleon", height: 0.6, type: ["ice"] },
        { name: "Bulbasaur", height: 7, type: ["dark", "poison"] },
        { name: "Ivysaur", height: 1, type: ["steel", "poison"] },
        { name: "Venusaur", height: 0.3, type: ["dragon", "poison"] }
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
        let pokemonList = document.querySelector(".container");
        let listPokemon = document.createElement("span");
        let button = document.createElement("button");

        // creating a button for each Pokémon
        button.innerText = pokemon.name;
        button.classList.add("type");
        let pokemonType = pokemon.type[0];
        button.classList.add(pokemonType);
        button.classList.add("left");
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
