import { StyleSheet, Text, View } from "react-native";

export default function GeneralSection() {
  return (
    <View style={styles.container}>
      <Text>Impostazioni Generali</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}); 