import { View, Text, StyleSheet } from 'react-native';

export default function TelaHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E2A3A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },
});