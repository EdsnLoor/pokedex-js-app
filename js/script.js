let pokemonRepository = (function () {
    let pokemonList = [
        { name: "bulbasaur", height: 7, type: ["grass", "poison"] },
        { name: "ivysaur", height: 1, type: ["grass", "poison"] },
        { name: "venusaur", height: 0.3, type: ["grass", "poison"] },
        { name: "Groudon", height: 3.5, type: ["ground"] },
        { name: "charmander", height: 2.9, type: ["fire"] },
        { name: "charmeleon", height: 0.6, type: ["fire"] },
    ];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

function printArrayDetails(i){
    if (i.height > 0.6){
        document.write(i.name + ' (height: ' + i.height + ')' +  " - Wow, that's big!"  + '<br>')
    }
    else {
        document.write(i.name + ' (height: ' + i.height + ')' + '<br>')
    }
}
pokemonRepository.getAll().forEach(printArrayDetails);
