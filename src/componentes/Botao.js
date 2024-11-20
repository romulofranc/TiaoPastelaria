import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';

import Texto from './../componentes/Texto.js';

export default function Botao({onPress, children, style}){
    return <>
    <TouchableOpacity style ={[style, styles.botao]} onPress={onPress}>
        {children}
    </TouchableOpacity>
    </>
    
}

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "red",
        paddingVertical: 16,
        borderRadius: 6,
    },
});