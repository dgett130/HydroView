import { StyleSheet, Text, View } from "react-native";

export default function PrivacySection() {
  return (
    <View style={styles.container}>
      <Text>Impostazioni Privacy</Text>
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