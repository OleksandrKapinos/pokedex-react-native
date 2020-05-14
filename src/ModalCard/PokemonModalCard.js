import React, {useEffect, useState} from 'react'
import {View, StyleSheet, Text, Image, Button, ActivityIndicator} from 'react-native'

export const PokemonModalCard = ({url, index, close}) => {
    const [pokemon, setPokemon] = useState({
        id: 1,
        name: '            ',
        types: [],
        stats: [],
        weight: ''
    });
    const [loading, setLoading] = useState(true);
    const imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full';



    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json())
            .then(data => {
                const {name, id, types, stats, weight, ...rest} = data;
                stats.reverse();
                const pokemonName = name[0].toUpperCase() + name.slice(1);
                setPokemon({
                    id,
                    name: pokemonName,
                    types,
                    stats,
                    weight,
                });
                setLoading(false)
            })
    },[pokemon.id]);

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>{pokemon.name}</Text>
                <Image
                    style={styles.image}
                    source={{
                        uri: (index < 10) ? `${imgUrl}/00${index}.png` :
                            (index < 100) ? `${imgUrl}/0${index}.png` :
                                `${imgUrl}/${index}.png`
                    }}
                />
                {loading && <ActivityIndicator size="large" color="#2196F3"/>}
                <View style={styles.types}>
                    {pokemon.types.map((type, index) => {
                        return <Text style={styles.type} key={index}>{type.type.name}</Text>
                    })}
                </View>
                {
                    pokemon.stats.map((stat, index) => {
                        return <Text key={index}

                        >{stat.stat.name} - {stat.base_stat}</Text>
                    })
                }                <Text style={styles.text}>weight - {pokemon.weight}</Text>
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
        margin: 50,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
    },
    title: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        color: '#fff',
        fontSize: 25,
        marginBottom: 15,
        padding: 5
    },
    text: {
        backgroundColor: '#2196F3',
        borderRadius: 10,
        color: '#fff',
        fontSize: 16,
        margin: 5,
        padding: 5,
        textTransform: 'uppercase',
        width: '100%'
    },
    types: {
        margin: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    type: {
        backgroundColor: '#303F9F',
        borderRadius: 10,
        color: '#fff',
        fontSize: 16,
        margin: 5,
        padding: 5,
        textTransform: 'uppercase',
    },
});
