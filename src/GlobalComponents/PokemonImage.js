import React from 'react'
import {Image, View} from 'react-native'

export const PokemonImage = ({index, size}) => {
    const imgUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full';
    return (
        <View>
            <Image
                style={{width: size, height: size,}}
                source={{
                    uri: (index < 10) ? `${imgUrl}/00${index}.png` :
                        (index < 100) ? `${imgUrl}/0${index}.png` :
                            `${imgUrl}/${index}.png`
                }}
            />
        </View>
    )
};

