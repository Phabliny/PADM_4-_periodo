import { StyleSheet, Text, View, Image } from 'react-native';
import { getItens } from './ligthteria'

export default function Imagem({posicao}) {
    const dados = getItens();
    const data = dados[posicao];
  return (
    <View style={styles.container}>
        <View style={styles.div}>
            <Image style={styles.imagem} source={data.imagem}/>
            <Text style={styles.descricao}>{data.descricao}</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    div: {
        backgroundColor: 'white',
        width: 160,
        height: 240,
        borderRadius: 20,
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    imagem: {
        width:70,
        height: 120
    },
    descricao: {
        marginTop: 25,
        fontSize: 15
    }
});
