import { Stack } from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { DrawerProvider } from "@/app/context/DrawerContext";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <DrawerProvider>
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: "#4e8545",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      </DrawerProvider>
    </GluestackUIProvider>
  );
}
