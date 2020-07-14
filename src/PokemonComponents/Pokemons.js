import React, {useEffect} from 'react';
import {PokemonList} from './PokemonList';
import {PokemonModalCard} from './../ModalCard/PokemonModalCard';
import {Loader} from './../GlobalComponents/Loader';
import {Button, Modal, ScrollView, StyleSheet, Text, View} from 'react-native';

const Pokemons = (props) => {

    useEffect(() => {
        props.updatePokemonsList()
    }, [props.state.pokemonQuantity]);


    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.state.showCard}
            >
                <PokemonModalCard index={props.state.currentPokemonId}
                                  close={props.closePokemonCard}
                />
            </Modal>
            <ScrollView>
                {props.state.loading
                    ? <Loader/>
                    : props.state.pokemons.length
                        ? <PokemonList pokemons={props.state.pokemons}
                                       showPokemonCard={props.showPokemonCard}/>
                        : <View style={styles.box}>
                            <Text style={styles.text}>No pokemons</Text>
                        </View>
                }
                <View style={styles.buttonBox}>
                    <Button style={styles.button}
                            title={'Add more'}
                            onPress={() => props.addPokemon()}
                    />
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
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
    button: {
        backgroundColor: '#2196F3',
        color: '#fff',
    },
    buttonBox: {
        margin: 15,
    }
});


export default Pokemons;
