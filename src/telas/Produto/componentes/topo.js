import React from "react";
import {StatusBar,Image, StyleSheet, Dimensions} from 'react-native';

import pastel from './../../../../assets/combo-pastel.png';
import Texto from './../../../componentes/Texto.js';

export default function Topo({titulo}) {
    return<> 
        <StatusBar/>
        <Image style ={styles.imagem} source={pastel}></Image>
        <Texto style ={styles.detalhes}>{titulo}</Texto>  
    </>
}

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    detalhes:{
        fontSize: 20,
        textAlign: 'right',
        color: 'white',
        fontWeight: 'bold',
        position: 'absolute',
        width: "95%",
        paddingTop: 5,
    },
    imagem: {
        width: "100%",
        // width: 450,
        height: 721 / 1024 * width,
    }
});