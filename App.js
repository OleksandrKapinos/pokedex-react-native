import React from 'react';
import {Modal} from 'react-native';
import Header from './src/Header/Header'
import PokemonsContainer from "./src/PokemonComponents/PokemonsContainer";


export default function App() {

    return (
        <Modal>
                <Header/>
                <PokemonsContainer/>
        </Modal>
    );
}

