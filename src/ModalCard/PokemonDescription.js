import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export const PokemonDecription = (props) => {

    return (
        <>
                <View style={styles.types}>
                    {props.types.map((type, index) => {
                        return <Text style={styles.type} key={index}>{type.type.name}</Text>
                    })}
                </View>
                {
                    props.stats.map((stat, index) => {
                        return <Text key={index}
                                     style={styles.text}
                        >{stat.stat.name} - {stat.base_stat}</Text>
                    })
                }
        </>
    )
};


const styles = StyleSheet.create({
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
