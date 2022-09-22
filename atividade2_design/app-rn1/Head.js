import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Head() {
  return (
    <View style={styles.head}>
      <Text style={styles.titulo}>Lighteria</Text>
      <Image style={styles.imagem} source={require('./src/img/icone-sacola.png')} />
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
    fontSize: 35, 
  },
  imagem: {
    width: 50,
    height: 50,
    backgroundColor:'white',
    borderRadius:50,
    marginRight: 15
  }
});
