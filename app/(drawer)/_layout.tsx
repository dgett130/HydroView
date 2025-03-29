import { Drawer } from "expo-router/drawer";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { DrawerProvider, useDrawer } from "@/app/context/DrawerContext";

function DrawerLayoutContent() {
  const { setSelectedDrawer } = useDrawer();

  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        swipeEdgeWidth: 0,
      }}
      screenListeners={{
        drawerItemPress: (e) => {
          const route = e.target!.split('/').pop() || 'home';
          setSelectedDrawer(route);
        },
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

export default function DrawerLayout() {
  return (
    <DrawerProvider>
      <DrawerLayoutContent />
    </DrawerProvider>
  );
}
