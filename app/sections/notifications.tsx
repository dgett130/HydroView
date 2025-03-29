import { StyleSheet, Text, View } from "react-native";

export default function NotificationsSection() {
  return (
    <View style={styles.container}>
      <Text>Impostazioni Notifiche</Text>
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