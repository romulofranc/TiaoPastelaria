import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Texto from "../../componentes/Texto";
import ListaItem from "./ListaItem";
import styles from './estilos'

export default function Index() {

    const [listData, setListData] = useState([]);

    //Capturar os dados do AsyncStorage
    const loadListData = async () => {
        const storedObjectJSON = await AsyncStorage.getItem('ListaDesejos');
        if (storedObjectJSON !== null) {
            const storedObject = JSON.parse(storedObjectJSON);
            setListData(storedObject);
        }
    }

    //Busca a Lista de Desejos quando montar o component
    useEffect(() => {
        loadListData();
    }, []);

    return <View>
        <StatusBar />
        <Texto style={styles.titulo}>Lista de Desejos</Texto>
        <Texto>Estes são os produtos adicionados na sua Lista de Desejos</Texto>
            <FlatList
                data={listData}
                renderItem={({ item }) => <ListaItem {...item} />}
                keyExtractor={({ id }) => id ? id.toString() : `${Math.random()}`}
                numColumns={2}

            />

    </View>
    
}



