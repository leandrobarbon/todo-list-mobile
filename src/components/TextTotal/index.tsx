import { styles } from "./styles";

import { Text, View } from "react-native";

type TextTotalProps = {
  text: string;
  total: number;
  colors: {
    text: string;
  };
};

export function TextTotal({ text, total, colors }: TextTotalProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: colors.text }]}>{text}</Text>
      <Text style={styles.total}>{total}</Text>
    </View>
  );
}
