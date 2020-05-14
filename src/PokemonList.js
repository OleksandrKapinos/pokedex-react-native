import React from 'react'
import { View, StyleSheet } from 'react-native'
import { PokemonCard } from './PokemonCard'

export const PokemonList = (prop) => {
    return (
        <View style={styles.container}>
            {prop.pokemons.map((pokemon, index) => {
                return (
                <PokemonCard
                    style={styles.card}
                    name={pokemon.name}
                    url={pokemon.url}
                    key={index}
                    index={index + 1}
                    open={prop.openPockemonCard}
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
        alignItems: 'center'
    },
    card: {
        width: '50%',
    }
});
