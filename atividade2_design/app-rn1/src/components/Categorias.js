import { StyleSheet, Text, View} from 'react-native';

export default function Categorias() {
  return (
    <View style={styles.container}>
        <View style={styles.linha}/>
        <View>
            <Text style={styles.legenda}>Categorias</Text>
        </View>
        <View style={styles.linha}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    legenda: {
        width: 120, 
        textAlign: 'center', 
        color: 'gray', 
        fontSize: 20
    },
    linha: {
        flex: 1, 
        height: 1, 
        backgroundColor: 'gray'
    }
});