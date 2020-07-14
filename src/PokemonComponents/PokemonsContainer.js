import React from 'react';
import {pokemonAPI} from './../api/api'
import Pokemons from "./Pokemons";

class PokemonsContainer extends React.Component {
    state = {
        pokemons: [],
        currentPokemonId: null,
        showCard: false,
        pokemonQuantity: 12,
        loading: true
    };

    componentDidMount() {
        this.updatePokemonsList();
    };
    updatePokemonsList = () => {
        pokemonAPI.getFewPokemons(this.state.pokemonQuantity)
            .then(data => {
                this.setState({
                    ...this.state,
                    pokemons: data.results,
                    loading: false
                })
            })
    };
    addPokemon = () => {
        this.setState({
            ...this.state,
            pokemonQuantity:  this.state.pokemonQuantity + 12
        })
    };
    showPokemonCard = (index) => {
        this.setState({
            ...this.state,
            showCard: true,
            currentPokemonId: index
        })
    };
    closePokemonCard = () => {
        this.setState({
            ...this.state,
            showCard: false
        })
    };


    render() {
        return <Pokemons state={this.state}
                         addPokemon={this.addPokemon}
                         showPokemonCard={this.showPokemonCard}
                         closePokemonCard={this.closePokemonCard}
                         updatePokemonsList={this.updatePokemonsList}
        />
    }
}

export default PokemonsContainer;
