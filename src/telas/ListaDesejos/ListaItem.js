
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Texto from "../../componentes/Texto";
import styles from "./estilos";

export default function ListaItem({id, titulo, imagem}){

    const clearAsyncStorage = async () => {
        try {
          await AsyncStorage.clear();
          console.log("Todo o AsyncStorage foi limpo");
        } catch (error) {
          console.error("Erro ao limpar o AsyncStorage:", error);
        }
      };

    return <SafeAreaView style={styles.cardContainer}>
        <StatusBar/>
        <Card mode='contained' style={styles.card}>
            <Card.Content>
                <Card.Cover source={imagem} style={styles.imagem}></Card.Cover>
                <Texto style={styles.nomeProduto}>{titulo}</Texto>
                <Button icon="pizza" onPress={() => clearAsyncStorage(id, titulo, imagem)} style={styles.excluir}>EXCLUIR</Button>
            </Card.Content>
        </Card>        
    </SafeAreaView>

    
}