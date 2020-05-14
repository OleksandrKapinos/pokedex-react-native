import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Button, View, Modal, ScrollView} from 'react-native';
import {PokemonList} from "./src/PokemonList";
import {PokemonModalCard} from "./src/ModalCard/PokemonModalCard";

export default function App() {
    const [pokemons, setPokemons] = useState([]);
    const [currentPokemon, setCurrentPokemon] = useState({});
    const [showCard, setShowCard] = useState(false);
    const [pokemonQuantity, setpokemonQuantity] = useState(12);
    const urlPokemon = 'https://pokeapi.co/api/v2/pokemon';


    useEffect(() => {
        fetch(`${urlPokemon}?limit=${pokemonQuantity}`)
            .then(response => response.json())
            .then(list => {
                console.log('log from useEffect');
                setPokemons(list.results);
            })
    }, [currentPokemon]);

    const addPokemon = (size) => {
        setpokemonQuantity(size + 12);
    };

    const showPokemonCard = (url, index) => {
        setShowCard(true);
        setCurrentPokemon({ url, index});
    };

    const closePokemonCard = () =>  {
        setShowCard(false);
    };

    return (
        <Modal>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text}>Pokedex</Text>
                </View>

                <Modal
                animationType="slide"
                transparent={true}
                visible={showCard}
                >
                    <PokemonModalCard url={currentPokemon.url}
                                      index={currentPokemon.index}
                                      close={closePokemonCard}
                    />
                </Modal>

                <ScrollView>
                    {pokemons.length ? <PokemonList pokemons={pokemons}
                                                    openPockemonCard={showPokemonCard}
                        /> :
                        <Text>No pokemons</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 25
    },
    button: {
        backgroundColor: '#2196F3',
        color: '#fff',
    },
    buttonBox: {
        margin: 15,
    }
});
