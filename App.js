import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const url = 'https://pokeapi.co/api/v2/pokemon';
  const urlImg = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full';

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Pokedex</Text>
      </View>
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
    padding: 15
  },
  text: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontSize: 25
  }
});
