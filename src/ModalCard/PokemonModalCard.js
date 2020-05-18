import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import {PokemonDecription} from './PokemonDescription'
import {Loader} from '../GlobalComponents/Loader'
import {PokemonImage} from '../GlobalComponents/PokemonImage'

export const PokemonModalCard = ({url, index, close}) => {
    const [pokemon, setPokemon] = useState({
        id: 1,
        name: '            ',
        types: [],
        stats: [],
        weight: ''
    });
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => {
                const {name, id, types, stats, ...rest} = data;
                stats.reverse();
                const pokemonName = name[0].toUpperCase() + name.slice(1);
                setPokemon({
                    id,
                    name: pokemonName,
                    types,
                    stats,
                });
                setLoading(false)
            })
    },[pokemon.id]);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{pokemon.name} #{pokemon.id}</Text>
                <PokemonImage index={index} size={200}/>
                {loading && <Loader/>}
                <PokemonDecription types={pokemon.types} stats={pokemon.stats}/>
                <Button title={'Close'}
                        onPress={() => close()}
                        color={'#F44336'}
                />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000aa',

    },
    box: {
        backgroundColor: '#fff',
        margin: 30,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
    title: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        color: '#fff',
        fontSize: 25,
        marginBottom: 15,
        padding: 5
    },
});
