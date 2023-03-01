let pokemonList = [
    { name: "bulbasaur", height: 7, type: ["grass", "poison"] },
    { name: "ivysaur", height: 1, type: ["grass", "poison"] },
    { name: "venusaur", height: 0.3, type: ["grass", "poison"] },
    { name: "Groudon", height: 3.5, type: ["ground"] },
    { name: "charmander", height: 2.9, type: ["fire"] },
    { name: "charmeleon", height: 0.6, type: ["fire"] },
];
for (let i = 0; i < pokemonList.length; i++)
// Initalize for loop to run for the total length of the array

{
    if (pokemonList[i].height > 1) {
        console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow, that's big!");
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")  - Wow, that's big!" + "<br>");
    }

    else {
        console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
        document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + "<br>");
    }
}
