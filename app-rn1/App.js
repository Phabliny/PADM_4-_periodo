import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
//import Head from './Head'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Prática Layout Flexbox</Text>
      <View style={styles.containerImage}>
          <Image
            style={styles.placa1}
            source={require('./assets/placa1.png')}
          />
          <Image
            style={styles.placa2}
            source={require('./assets/placa2.png')}
          />
      </View>
      <View style={styles.containerImage}>
          <Image
            style={styles.placa3}
            source={require('./assets/placa3.png')}
          />
          <Image
            style={styles.placa4}
            source={require('./assets/placa4.png')}
          />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'left',
  },
  text: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 21, 
    marginBottom: 80
  },
  placa1: {
    width: 170,
    height: 170,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'grey',
    borderRadius: 20,
    margin: 5 
  },
  placa2: {
    width: 170,
    height: 170,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'grey',
    borderRadius: 20,
    margin: 5 
  },
  placa3: {
    width: 170,
    height: 170,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'grey',
    borderRadius: 20,
    margin: 5 
  },
  placa4: {
    width: 170,
    height: 170,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'grey',
    borderRadius: 20,
    margin: 5 
  },
  containerImage: {
    flex: 1,
    height: 170,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 'auto'
  }
});
