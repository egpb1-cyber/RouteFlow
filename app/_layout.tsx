import { Stack } from 'expo-router';

type RootStackParamList = {
  telainicial: undefined;
  telacriacao: undefined;
  telaseuemail: undefined;
  telarecuperacao: undefined;
  telahome: undefined;
};

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
      initialRouteName="telainicial"
    >
      <Stack.Screen name="telainicial" />
      <Stack.Screen name="telacriacao" />
      <Stack.Screen name="telaseuemail" />
      <Stack.Screen name="telarecuperacao" />
      <Stack.Screen name="telahome" />
    </Stack>
  );
}