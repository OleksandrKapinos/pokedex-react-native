import React from 'react'
import { View, StyleSheet } from 'react-native'
import { PokemonCard } from './PokemonCard'

export const PokemonList = (props) => {
    return (
        <View style={styles.container}>
            {props.pokemons.map((pokemon, index) => {
                return (
                <PokemonCard
                    style={styles.card}
                    name={pokemon.name}
                    url={pokemon.url}
                    key={index}
                    index={index + 1}
                    showPokemonCard={props.showPokemonCard}
                />
                )
            })}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    card: {
        width: '50%',
    }
});
