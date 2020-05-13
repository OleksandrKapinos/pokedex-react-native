import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

export const PokemonCard = ({name, url, index, open}) => {
    const imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full';

    return (
        <TouchableOpacity
            onPress={() => open(url, index)
            }
        >
        <View style={styles.container}

        >
            <View style={styles.box}>

                <Image
                    style={styles.image}
                    source={{
                        uri: (index < 10) ? `${imgUrl}/00${index}.png` :
                            (index < 100) ? `${imgUrl}/0${index}.png` :
                                            `${imgUrl}/${index}.png`
                    }}
                />
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
        display: 'flex',
        height: 190,
        width: 150,
        borderWidth: 3,
        borderColor: '#2196F3',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 150,
        height: 150,
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
