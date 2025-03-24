import { Drawer } from "expo-router/drawer";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        swipeEdgeWidth: 0,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: "Home",
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="d-settings"
        options={{
          title: "Impostazioni",
          drawerLabel: "Impostazioni",
        }}
      />
    </Drawer>
  );
}
