import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import {PokemonImage} from "../GlobalComponents/PokemonImage";

export const PokemonCard = ({name, index, showPokemonCard}) => {

    return (
        <TouchableOpacity onPress={() => showPokemonCard(index)}>
        <View style={styles.container}>
            <View style={styles.box}>
                <PokemonImage index={index} size={150}/>
                <Text style={styles.text}>{name}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
    box: {
        height: 190,
        width: 150,
        borderWidth: 3,
        borderColor: '#2196F3',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: '#fff',
        textTransform: 'uppercase',
        backgroundColor: '#2196F3',
        fontSize: 16,
        height: 'auto',
        padding: 5,
        borderRadius: 10,
    },
});
