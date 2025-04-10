import { Drawer } from "expo-router/drawer";
import { DrawerProvider } from "@/app/context/DrawerContext";

function DrawerLayoutContent() {
  return (
    <Drawer
      screenOptions={{
        headerShown: true,
        swipeEdgeWidth: 0,
      }}
    >
      <Drawer.Screen
        name="(home)"
        options={{
          title: "Home",
          drawerLabel: "Home",
        }}
      />
      <Drawer.Screen
        name="(settings)"
        options={{
          title: "Impostazioni",
          drawerLabel: "Impostazioni",
        }}
      />
        <Drawer.Screen
            name="(profile)"
            options={{
                title: "Profilo",
                drawerLabel: "Profilo",
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
