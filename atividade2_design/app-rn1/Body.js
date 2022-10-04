import { StyleSheet, Text, View } from 'react-native';
import Categorias from './Categorias';
import Imagens from './Imagens';

export default function Body() {
  return (
    <View style={styles.container}>
        <Categorias/>
        <Imagens/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 155
  }
});