import { TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
};

export default function InputField({ value, onChangeText, placeholder, secureTextEntry, keyboardType }: Props) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#888"
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType || 'default'}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#E8E8E8',
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 20,
    marginBottom: 12,
    fontSize: 14,
    color: '#333',
  },
});