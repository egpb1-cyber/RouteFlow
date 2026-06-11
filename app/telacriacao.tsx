import { useState } from 'react';
import { View, Image, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import LoginCreateToggle from '../components/LoginCreateToggle';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

export default function TelaCriacao() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreate = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Atenção', 'As senhas não coincidem.');
      return;
    }
    router.push('/telahome' as any);
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

        <LoginCreateToggle active="create" />

        <InputField
          placeholder="Usuário ou E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <InputField
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <InputField
          placeholder="Confirmar Senha"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <PrimaryButton title="Entrar" onPress={handleCreate} style={{ marginTop: 20 }} />
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
    marginBottom: 30,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    tintColor: '#fff',
  },
});