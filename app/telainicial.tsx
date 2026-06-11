import { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import LoginCreateToggle from '../components/LoginCreateToggle';
import InputField from '../components/InputField';
import PrimaryButton from '../components/PrimaryButton';

export default function TelaInicial() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
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

        <LoginCreateToggle active="login" />

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

        <Text style={styles.forgotText} onPress={() => router.push('/telaseuemail' as any)}>
          Esquecer Senha
        </Text>

        <PrimaryButton title="Entrar" onPress={handleLogin} />
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
  forgotText: {
    color: '#ccc',
    textAlign: 'right',
    marginBottom: 20,
    fontSize: 12,
  },
});