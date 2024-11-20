import React from "react";
import {Image, View, StyleSheet, Alert} from 'react-native';

import Logo from './../../../../assets/splash.png';
import Texto from './../../../componentes/Texto.js';
import Botao from "./../../../componentes/Botao.js";

export default function Detalhes({nome, detalhes, preco, botao}) {
    return<>
        <View style ={styles.contanier}>
        <View style={styles.logotipo}>
            <Image source ={Logo} style={styles.logo} resizeMode="contain"/>    
            <Texto style ={styles.produto}>{nome}</Texto>
        </View> 
        <Texto style ={styles.text}>{detalhes}</Texto>
        <Texto style ={styles.pastel}>{preco}</Texto>
        <Botao onPress={() =>{Alert.alert("Lista de Desejos!",
        "Em breve novidades.")}} style={styles.botao}>
        <Texto style ={styles.botaoTexto}>{botao}</Texto>
        </Botao>
        </View>   
    </>
}

const styles = StyleSheet.create({
    contanier: {
        flex: 1,
    },
    produto: {
        textAlign: 'center',
        fontSize: 30,
        paddingTop: 20,
        fontWeight:'bold',
    },
    text: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 15,
    },
    pastel: {
        fontSize: 30,
        color: 'darkgreen',
        paddingLeft: 20,
        fontWeight: 'bold',
    },
    logo: {
        width: 80,
        height: 80,
    },
    logotipo: {
        flexDirection: "row",
    },
    botaoTexto: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        lineHeight: 26,
        fontWeight: "bold",
    }
});