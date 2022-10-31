import { StyleSheet, Text, View, Image } from 'react-native';
import { getItens } from './ligthteria'

export default function Imagem({ posicao }) {
    const dados = getItens();
    const data = dados[posicao];
    return (
        <View style={styles.div}>
            <Image style={styles.imagem} source={data.imagem} />
            <Text style={styles.descricao}>{data.descricao}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    div: {
        backgroundColor: 'white',
        width: 160,
        height: 240,
        borderRadius: 30,
        // flexWrap: 'wrap',
        // alignItems: 'center',
        // justifyContent: 'center',
        margin: 10,
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    imagem: {
        width: 70,
        height: 120
    },
    descricao: {
        marginTop: 25,
        fontSize: 15
    }
});
