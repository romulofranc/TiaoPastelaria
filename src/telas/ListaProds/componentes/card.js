import React from "react";
import {View,ScrollView, TouchableOpacity, Alert} from 'react-native';
import { Button, Card} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./css";
import Texto from "../../../componentes/Texto.js";


export default function Detalhes({item:{id, titulo,descricao,imagem}}) { 

    //função para guardar a lista de desejos
    async function addListaDesejos(id, titulo, imagem) {
        
        const addProduto = [{id: id, titulo: titulo, imagem: imagem}];

        //Verifica se o AsyncStorage está populado
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
        if(listaDesejosSalva == null){
            //Converte os dados para string
            const ListaDesejosAtualizada = JSON.stringify(addProduto);

            //Insere o produto na Lista de Desejos
            await AsyncStorage.setItem('ListaDesejos', ListaDesejosAtualizada);
            Alert.alert("O produto foi adicionado com sucesso na sua lista de desejos");
            console.log("Produto Inserido");
            console.log(ListaDesejosAtualizada);
        } else{
            //A lista de desejos já tem conteúdo
            const ListaDesejos = JSON.parse(listaDesejosSalva);

            //Adiciona novo produto na Lista de Desejos
            ListaDesejos.push({id: id, titulo: titulo, imagem: imagem});

            const ListaDesejosAtualizada = JSON.stringify(ListaDesejos);
            await AsyncStorage.setItem('ListaDesejos',ListaDesejosAtualizada);
            Alert.alert("O produto foi adicionado com sucesso na sua lista de desejos");
            console.log("Mais um produto na lista");
            console.log(ListaDesejosAtualizada)
        }
    }

    return <View style={styles.geral}>
                <Card>
                    <Card.Content>
                        <Texto style={styles.titulo}>{titulo}</Texto>
                        <Texto style={styles.detalhes}>{descricao}</Texto>
                    </Card.Content>
                    <Card.Cover source={imagem} style={styles.logo}/>
                    <Card.Actions>
                    <TouchableOpacity onPress={()=>addListaDesejos(id,titulo,imagem)}>
                        <Ionicons name="heart" size={30} color="red"/>
                    </TouchableOpacity>
                    </Card.Actions>
                </Card>  
            </View>

}