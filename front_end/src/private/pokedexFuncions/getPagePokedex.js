const pokemonPages = require('./pokemonsPages');
function getPagePokedex(index) {
    index===1? index=0 : index-1;
    return pokemonPages[index];
}

module.exports = getPagePokedex;