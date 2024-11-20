import React from "react";
import { StyleSheet, View, Image } from "react-native";


import Texto from "../../../componentes/Texto";
import styles from "../estilo";

export default function Sobre({ imagem, descricao, imagem2, avatar }) {
    return <>
        <View>
            <Image source={imagem2} style={styles.logo} resizeMode="contain" />
            <Texto style={styles.texto}>{descricao}</Texto>
            <Image source={imagem} style={styles.imagem} resizeMode="contain" />
            <Texto style={styles.texto}>{avatar}</Texto>
        </View>
    </>
}