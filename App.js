import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Button, View, ScrollView } from 'react-native';
import { PokemonList } from "./src/PokemonList";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonQuantity, setpokemonQuantity] = useState(12);
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon';


  useEffect(() => {
    fetch(`${urlPokemon}?limit=${pokemonQuantity}`)
        .then(response => response.json())
        .then(list => {
            setPokemons(list.results);
            console.log(pokemons)
        })
  });

  const addPokemon = (size) => {
        setpokemonQuantity(size + 12);
  };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Pokedex</Text>
            </View>

            <ScrollView>
                {pokemons.length ? <PokemonList pokemons={pokemons}/> :
                    <Text>No pokemons</Text>
                }
                <View style={styles.buttonBox}>
                    <Button style={styles.button}
                            title={'Add more'}
                            onPress={() => addPokemon(pokemonQuantity)}
                    /></View>
            </ScrollView>


        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto',
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
