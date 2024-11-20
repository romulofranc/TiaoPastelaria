import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listaContainer: {
        flex: 1,
    },
    cardContainer: {
        width: '50%',
        height: 250,
    },
    imagem: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: 'red',
    },
    nomeProduto: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    titulo: {
        fontSize: 26,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
    textoLista: {
        fontSize: 16,
        paddingBottom: 100,
    },
    excluir: {
        backgroundColor: 'white',
    }
})

export default styles;