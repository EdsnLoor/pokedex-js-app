let pokemonRepository = (function () {
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    let modalContainer = document.querySelector('#modal-container');

    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    // Get all the Pokémon
    function getAll() {
        return pokemonList;
    }
    function loadList() {
        showLoadingMessage();
        return fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                const promises = json.results.map(function (item) {
                    let pokemon = {
                        name: item.name.toUpperCase(),
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
                            // Return the modified pokemon object
                            return pokemon
                        })
                        .catch(function (e) {
                            console.error(e);
                        });
                });
                // Return a Promise that resolves to the array of objects
                return Promise.all(promises);
            })
            .then(function (pokemonList) {
                // Map the pokemonList to an array of objects with the desired data
                return pokemonList.map(function (pokemon) {
                    let updatedPokemon = {
                        name: pokemon.name,
                        height: pokemon.height,
                        imageUrl: pokemon.imageUrl,
                        detailsUrl: pokemon.detailsUrl,
                        type: pokemon.type
                    };
                    add(updatedPokemon)
                });
            })
            .catch(function (e) {
                console.error(e);
            });

    }
    function addListItem(pokemon){
        // setting variables
        let pokemonList = document.querySelector(".container");
        let listPokemon = document.createElement("span");
        listPokemon.classList.add('group-item')
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
        loadList(pokemon).then(function () {
        });
        hideLoadingMessage();
        showModal(pokemon);
    }

    function showModal(pokemonList) {
        const modalElement = document.getElementById('modal-container');
        const modal = new bootstrap.Modal(modalElement);

        // Set the modal title
        const titleElement = modalElement.querySelector('.modal-title');
        titleElement.innerText = pokemonList.name;

        // Create an image element
        const imgElement = document.createElement('img');
        imgElement.src = pokemonList.imageUrl;
        imgElement.alt = pokemonList.name;
        imgElement.classList.add('mx-auto', 'd-block'); // Add Bootstrap classes for centering


        // Set the modal body
        const bodyElement = modalElement.querySelector('.modal-body');
        bodyElement.innerHTML = '';
        bodyElement.appendChild(imgElement);

        // Create a div element for the height and type information
        const infoElement = document.createElement('div');
        infoElement.innerHTML = `
            <p>HEIGHT: <br> > ${pokemonList.height} m</p>
            <p>TYPES: <br> > ${pokemonList.type.join(', ')}</p>`;
        let normalImgURL = "https://ih1.redbubble.net/image.4048810590.2852/st,small,507x507-pad,600x600,f8f8f8.jpg";
        let waterImgURL = "https://bracketfights.com/images/hero/2019/favorite-water-type-pokmon-all-gens-and-forms-18888/1620848623.jpg";
        let fireImgURL = "https://ih1.redbubble.net/image.4102494090.0067/ur,pin_large_front,square,600x600.jpg";
        let electricImgURL = "https://toppng.com/uploads/preview/pokemon-electric-type-stickers-by-cat-games-inc-electric-energy-pokemon-symbol-11563101763qkg2toobev.png";
        let grassImgURL = "https://image.pngaaa.com/710/4835710-middle.png";
        let iceImgURL = "http://pm1.narvii.com/7170/fd7bfbecf3fe1e08b9abf3a98afe7863f17e6dabr1-894-894v2_uhq.jpg";
        let groundImgURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/1200px-Pok%C3%A9mon_Ground_Type_Icon.svg.png";
        let flyingImgURL = "https://e1.pngegg.com/pngimages/200/664/png-clipart-pokemon-type-symbols-able-white-feather-icon-thumbnail.png";
        let ghostImgURL = "https://image.pngaaa.com/884/6175884-middle.png";
        let rockImgURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/1024px-Pok%C3%A9mon_Rock_Type_Icon.svg.png";
        let fightImgURL = "https://www.clipartmax.com/png/middle/322-3228840_pokemon-type-symbols-download-pokemon-fighting-type-png.png";
        let poisonImgURL = "https://bracketfights.com/images/hero/2019/favorite-poison-type-pokmon-all-gens-and-forms-18888/1620851242.jpg";
        let psychicImgURL = "https://ih1.redbubble.net/image.4048812904.2915/st,small,507x507-pad,600x600,f8f8f8.jpg";
        let bugImgURL = "https://o.quizlet.com/LanybWitFqK1oIvil0ZuzQ_b.jpg";
        let darkImgURL = "https://ih1.redbubble.net/image.4810802434.7625/st,small,507x507-pad,600x600,f8f8f8.jpg";
        let steelImgURL = "https://image.pngaaa.com/807/4867807-middle.png";
        let dragonImgURL = "https://logodix.com/logo/1913959.jpg";
        let fairyImgURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/1024px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png";

        if (pokemonList.type[0] === 'electric'){
            infoElement.style.backgroundImage = `url(${electricImgURL})`;
        } else if (pokemonList.type[0] === 'water'){
            infoElement.style.backgroundImage = `url(${waterImgURL})`;
        }else if (pokemonList.type[0] === 'fire') {
            infoElement.style.backgroundImage = `url(${fireImgURL})`;
        }else if (pokemonList.type[0] === 'grass') {
            infoElement.style.backgroundImage = `url(${grassImgURL})`;
        } else if (pokemonList.type[0] === 'ice') {
            infoElement.style.backgroundImage = `url(${iceImgURL})`;
        }else if (pokemonList.type[0] === 'ground') {
            infoElement.style.backgroundImage = `url(${groundImgURL})`;
        }else if (pokemonList.type[0] === 'flying') {
            infoElement.style.backgroundImage = `url(${flyingImgURL})`;
        }else if (pokemonList.type[0] === 'ghost') {
            infoElement.style.backgroundImage = `url(${ghostImgURL})`;
        }else if (pokemonList.type[0] === 'rock') {
            infoElement.style.backgroundImage = `url(${rockImgURL})`;
        }else if (pokemonList.type[0] === 'fighting') {
            infoElement.style.backgroundImage = `url(${fightImgURL})`;
        }else if (pokemonList.type[0] === 'poison') {
            infoElement.style.backgroundImage = `url(${poisonImgURL})`;
        }else if (pokemonList.type[0] === 'psychic') {
            infoElement.style.backgroundImage = `url(${psychicImgURL})`;
        }else if (pokemonList.type[0] === 'bug') {
            infoElement.style.backgroundImage = `url(${bugImgURL})`;
        }else if (pokemonList.type[0] === 'dark') {
            infoElement.style.backgroundImage = `url(${darkImgURL})`;
        }else if (pokemonList.type[0] === 'steel') {
            infoElement.style.backgroundImage = `url(${steelImgURL})`;
        }else if (pokemonList.type[0] === 'dragon') {
            infoElement.style.backgroundImage = `url(${dragonImgURL})`;
        }else if (pokemonList.type[0] === 'fairy') {
            infoElement.style.backgroundImage = `url(${fairyImgURL})`;
        }else {
            infoElement.style.backgroundImage = `url(${normalImgURL})`;
        }
        infoElement.style.backgroundSize = 'auto 100px';
        infoElement.style.backgroundRepeat = 'no-repeat';
        infoElement.style.backgroundPositionX = 'right';
        infoElement.style.padding = '10px'; // Add some padding

        // Append the div element to the modal body
        bodyElement.appendChild(infoElement);

        // Show the modal
        modal.show();
    }

    function searchPokemon() {
        let searchInput = document.getElementById('search-input');
        let searchText = searchInput.value.toUpperCase();
        let allPokemon = document.querySelectorAll('.group-item');

        allPokemon.forEach(function(pokemon) {
            let pokemonName = pokemon.querySelector('.type').innerText;
            if (pokemonName.includes(searchText)) {
                pokemon.style.display = 'block';
            } else {
                pokemon.style.display = 'none';
            }
        });
    }

    let searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", function () {
        searchPokemon();
    });

    function hideModal() {
        modalContainer.classList.remove('is-visible');
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        // We only want to close if the user clicks directly on the overlay
        let target = e.target;
        if (target === modalContainer) {
            hideModal();
        }
    });

    function showLoadingMessage() {
        let loadingScreen= document.querySelector('.loading-screen')
        loadingScreen.classList.remove('not-visible');
        loadingScreen.classList.add('visible');
    }

    function hideLoadingMessage() {
        let loadingScreen= document.querySelector('.loading-screen');
        loadingScreen.classList.remove('visible');
        loadingScreen.classList.add('not-visible');
    }

    return {
        add: add,
        getAll: getAll,
        addListItem : addListItem,
        loadList : loadList,
        hideLoadingMessage : hideLoadingMessage
    };
})();

pokemonRepository.loadList().then(function() {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
    });
    setTimeout(pokemonRepository.hideLoadingMessage, 300);
});
