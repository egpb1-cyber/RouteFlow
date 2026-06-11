import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type Props = {
  active: 'login' | 'create';
};

export default function LoginCreateToggle({ active }: Props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.option, active === 'login' && styles.activeOption]}
        onPress={() => {
          if (active !== 'login') router.replace('/telainicial' as any);
        }}
      >
        <Text style={[styles.text, active === 'login' && styles.activeText]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, active === 'create' && styles.activeOption]}
        onPress={() => {
          if (active !== 'create') router.replace('/telacriacao' as any);
        }}
      >
        <Text style={[styles.text, active === 'create' && styles.activeText]}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 4,
    marginBottom: 20,
  },
  option: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeOption: {
    backgroundColor: '#3FA9D8',
  },
  text: {
    color: '#555',
    fontWeight: '600',
    fontSize: 14,
  },
  activeText: {
    color: '#fff',
  },
});