import { StyleSheet, Text, View, Image } from 'react-native';
import Imagem from './Imagem';

export default function Imagens() {
  return (
    <View style={styles.container}>
        <Imagem posicao='0'/>
        <Imagem posicao='1'/>
        <Imagem posicao='2'/>
        <Imagem posicao='3'/>
        <Imagem posicao='4'/>
        <Imagem posicao='5'/>
        <Imagem posicao='6'/>
        <Imagem posicao='7'/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
    },

});
