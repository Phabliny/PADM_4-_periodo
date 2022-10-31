import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Head() {
  return (
    <View style={styles.head}>
      <Text style={styles.titulo}>Lighteria</Text>
      <View style={styles.circulo}>
        <Image style={styles.imagem} source={require('./img/icone-sacola.png')} />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40
  },
  titulo: {
    color: 'black',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 35
  },
  circulo: {
    width: 50,
    height: 50,
    backgroundColor:'white',
    borderRadius:50,
    marginRight: 15,
    justifyContent: 'center',
    alignItems:'center'
 },
  imagem: {
    width: 30,
    height: 30
  }
});
