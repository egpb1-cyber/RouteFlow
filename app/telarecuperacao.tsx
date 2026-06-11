import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import PrimaryButton from '../components/PrimaryButton';

export default function TelaRecuperacao() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '', '', '']);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text.slice(-1);
    setCode(newCode);
  };

  const handleConfirm = () => {
    if (code.some((c) => c === '')) {
      Alert.alert('Atenção', 'Preencha todo o código.');
      return;
    }
    router.push('/telainicial' as any);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.iconWrapper}>
          <Text style={styles.icon}>🔒</Text>
        </View>

        <Text style={styles.title}>Recuperação de Senha</Text>
        <Text style={styles.subtitle}>
          Digite o código de 6 dígitos enviado no seu e-mail
        </Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
              keyboardType="number-pad"
              maxLength={1}
            />
          ))}
        </View>

        <PrimaryButton title="Confirmar" onPress={handleConfirm} />
        <PrimaryButton
          title="Voltar"
          onPress={() => router.push('/telaseuemail' as any)}
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
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    fontSize: 50,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    gap: 8,
  },
  codeInput: {
    backgroundColor: '#E8E8E8',
    width: 40,
    height: 45,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
  },
  backButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#3FA9D8',
  },
});