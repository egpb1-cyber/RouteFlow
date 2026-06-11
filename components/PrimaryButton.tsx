import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function PrimaryButton({ title, onPress, style }: Props) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3FA9D8',
    borderRadius: 25,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});