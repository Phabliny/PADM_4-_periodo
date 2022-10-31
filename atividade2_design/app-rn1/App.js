import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Head from './src/components/Head'
import Body from './src/components/Body'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Head/>
      <Body/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray'
  },
});
