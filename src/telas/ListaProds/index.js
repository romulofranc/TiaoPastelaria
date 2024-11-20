import React from "react";
import {FlatList} from "react-native"

import Card from "./componentes/card";
import Texto from "../../componentes/Texto";


export default function Index({infos}) { 
    
    return<>
        <FlatList
                    data={infos.lista}
                    renderItem={Card} 
                    keyExtractor={infos.lista.titulo}
                    ListHeaderComponent={() => {
                        return <>
                             <Texto {...infos}/> 
                        </>
                    }}
                />        
     </>
}