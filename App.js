<<<<<<< Updated upstream
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
=======
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Button, View, Modal, ScrollView} from 'react-native';
import {PokemonList} from './src/PokemonList/PokemonList';
import {PokemonModalCard} from './src/ModalCard/PokemonModalCard';
import {Loader} from './src/GlobalComponents/Loader';

export default function App() {
    const [pokemons, setPokemons] = useState([]);
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [showCard, setShowCard] = useState(false);
    const [pokemonQuantity, setpokemonQuantity] = useState(12);
    const [loading, setLoading] = useState(true);
    const urlPokemon = 'https://pokeapi.co/api/v2/pokemon';


    useEffect(() => {
        fetch(`${urlPokemon}?limit=${pokemonQuantity}`)
            .then(response => response.json())
            .then(list => {
                setPokemons(list.results);
                setLoading(false);
            })
    }, [pokemonQuantity]);

    const addPokemon = (size) => {
        setpokemonQuantity(size + 12);
    };

    const showPokemonCard = (url, index) => {
        setShowCard(true);
        setCurrentPokemon({url, index});
    };

    const closePokemonCard = () => {
        setShowCard(false);
    };

    return (
        <Modal>
            <View style={styles.container}>
                <View style={[styles.header, styles.box]}>
                    <Text style={[styles.text, styles.whiteText]}>Pokedex</Text>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showCard}>
                    <PokemonModalCard url={currentPokemon.url}
                                      index={currentPokemon.index}
                                      close={closePokemonCard}/>
                </Modal>
                <ScrollView>
                    {loading ? <Loader/> : pokemons.length ?
                        <PokemonList pokemons={pokemons}
                                     openPockemonCard={showPokemonCard}
                        /> : <View style={styles.box}>
                            <Text style={styles.text}>No pokemons</Text>
                        </View>
                    }
                    <View style={styles.buttonBox}>
                        <Button style={styles.button}
                                title={'Add more'}
                                onPress={() => addPokemon(pokemonQuantity)}
                        /></View>
                </ScrollView>
            </View>
        </Modal>
    );
}

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
>>>>>>> Stashed changes
});
