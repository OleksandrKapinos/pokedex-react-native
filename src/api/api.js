import * as axios from 'axios';

let instancePokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon'
});

export const pokemonAPI = {
    getFewPokemons (pokemonQuantity) {
       return instancePokemon.get(`?limit=${pokemonQuantity}`)
           .then(response => response.data
       )
    },
    getCurrentPokemon(pokemonId) {
        return instancePokemon.get(`/${pokemonId}`)
            .then(response => response.data)
    }
};
