//jQuery IIFE
$(function(){
    /*----- constants -----*/
    const baseURL = 'https://pokeapi.co/api/v2/pokemon';
    /*----- app's state (variables) -----*/
    let pokemon, pokemonDetail;
    /*----- cached element references -----*/
    const $ulEl = $('.collection');
    const $imgEl = $('.modal-content img');
    const $name = $('#name');
    const $moves = $('#moves');
    const $type1 = $('#type1');
    const $type2 = $('#type2');
    const $abilities = $('#abilities');
    const $height = $('#height');
    const $modal = $('.modal');
    /*----- event listeners -----*/
    $ulEl.on('click', 'span', handleClick);
    /*----- functions -----*/
    // initialize modal
    $modal.modal();
    const instance = M.Modal.getInstance($modal);
    function handleClick(event) {
        getPokemon(event.target.dataset.url, true);
    }
    // make the data available as soon as the app loads
    getPokemon();
    function getPokemon(detailURL, isDetail = false) {
        const url = detailURL || baseURL;
        $.ajax(url)
        .then(
        function(data) {
            if(!isDetail) {
                pokemon = data.results;
                render(); // programatically render the html
            } else {
                pokemonDetail = data;
                console.log(pokemonDetail)
                render(true);
            }
        }, function(error){
            console.log("Error: ", error);
        });
    }
    function generateHTML() {
        return pokemon.map(function(p) {
            return `
            <li class="collection-item red-text">
                <div style="text-transform: capitalize;">${p.name}
                    <span data-url="${p.url}" class="secondary-content blue-text">
                    Detail
                    </span>
                </div>
            </li>`;
        });
    }
    function render(isDetail = false) {
        if(!isDetail) {
            const html = generateHTML().join("");
            $ulEl.html(html)
        } else {
            // produce the modal
            // $imgEl.attr('src', pokemonDetail.sprites.front_default);
            $imgEl.attr('src', `https://pokeres.bastionbot.org/images/pokemon/${pokemonDetail.id}.png`);
            $imgEl.attr('alt', pokemonDetail.name);
            $name.text(pokemonDetail.name);
            switch(pokemonDetail.types[0].type.name) {
                case 'poison':
                $type1[0].style.background  = 'purple'
                $type1[0].style.color  = 'white'
                 break;
                case 'grass':
                 $type1[0].style.background  = 'green'
                $type1[0].style.color  = 'white'
                break;
                case 'bug':
                 $type1[0].style.background  = 'green'
                $type1[0].style.color  = 'white'
                break;
                case 'normal':
                 $type1[0].style.background  = 'gray'
                $type1[0].style.color  = 'white'
                break;
                case 'fire':
                 $type1[0].style.background  = 'red'
                $type1[0].style.color  = 'white'
                break;
                case 'water':
                 $type1[0].style.background  = 'blue'
                $type1[0].style.color  = 'white'
                break;
                case 'flying':
                 $type1[0].style.background  = 'lightblue'
                $type1[0].style.color  = 'white'
                 break;
                default:
                null
               }  
            if (pokemonDetail.types.length > 1) {
                switch(pokemonDetail.types[1].type.name) {
                    case 'poison':
                        $type2[0].style.background  = 'purple'
                        $type2[0].style.color  = 'white'
                        break;
                    case 'grass':
                        $type2[0].style.background  = 'green'
                        $type2[0].style.color  = 'white'
                        break;
                    case 'bug':
                        $type2[0].style.background  = 'green'
                        $type2[0].style.color  = 'white'
                        break;
                    case 'normal':
                        $type2[0].style.background  = 'gray'
                        $type2[0].style.color  = 'white'
                        break;
                    case 'fire':
                        $type2[0].style.background  = 'red'
                        $type2[0].style.color  = 'white'
                        break;
                    case 'water':
                        $type2[0].style.background  = 'blue'
                        $type2[0].style.color  = 'white'
                        break;
                    case 'flying':
                        $type2[0].style.background  = 'lightblue'
                        $type2[0].style.color  = 'white'
                        break;
                    default:
                        null
                }  
            }
            $type1.text(pokemonDetail.types[0].type.name);
            console.log(pokemonDetail.types.length)
            pokemonDetail.types.length === 1 || undefined ? console.log(pokemonDetail.types.length) : $type2.text(pokemonDetail.types[1].type.name)    
            $height.text("Height: " + pokemonDetail.height);
            $moves.text("Number of moves: " + pokemonDetail.moves.length);
            $abilities.text("Number of abilities: " + pokemonDetail.abilities.length);
            // open the modal
            instance.open();
        }
    }
});