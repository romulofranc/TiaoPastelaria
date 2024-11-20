import React from "react";
import { FlatList, StyleSheet, View} from "react-native";

import Topo from './componentes/topo';
import Detalhes from "./componentes/detalhes";
import Item from './componentes/item';
import Texto from "../../componentes/Texto";

export default function Index({ topo, detalhes, itens }) {
    return <>
            <FlatList
                    data={itens.lista}
                    renderItem={Item} 
                    keyExtractor={itens.lista.nome}
                    ListHeaderComponent={() => {
                        return <>
                            <Topo {...topo} />
                            <View>
                                <Detalhes {...detalhes} />
                                <Texto style={styles.titulo}>{itens.titulo}</Texto>
                            </View>
                           
                        </>
                    }}
                />
        </>
}

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    },
});
