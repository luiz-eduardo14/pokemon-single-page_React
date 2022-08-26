const pokedex = require('./pokedexFormat');

function GeneratesPagesContent(allContent) {
    const pokedexPages = [];
    if(Array.isArray(allContent)){
    for (let index = 0; index < allContent.length; index+=8) {
        pokedexPages.push(allContent.slice(index,index+8));
    }
    }else{
        console.error(`${allContent} not array`);
    }
    return pokedexPages;
}
const pokedexPages = GeneratesPagesContent(pokedex);

module.exports = pokedexPages;
