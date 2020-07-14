import React from 'react'
import {StyleSheet, Text, View} from 'react-native';


const Header = (props) => {
    return (
    <View style={[styles.header, styles.box]}>
        <Text style={[styles.text, styles.whiteText]}>Pokedex</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: '#2196F3',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25
    },
    whiteText: {
        color: '#fff',
    },
});


export default Header;
