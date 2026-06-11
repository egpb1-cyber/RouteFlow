import { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

export default function TelaSeuEmail() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (!email) {
      Alert.alert('Atenção', 'Informe seu e-mail.');
      return;
    }
    router.push('/telarecuperacao' as any);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }}
            style={styles.avatar}
          />
        </View>

        <Text style={styles.title}>Informe seu e-mail</Text>

        <InputField
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <PrimaryButton title="Avançar" onPress={handleNext} />
        <PrimaryButton
          title="Voltar"
          onPress={() => router.push('/telainicial' as any)}
          style={styles.backButton}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E2A3A',
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    tintColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3FA9D8',
  },
});