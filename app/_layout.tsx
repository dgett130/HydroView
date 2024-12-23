import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: '#4e8545',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
      >
        <Stack.Screen name={"(tabs)"} />
      </Stack>
  );
}
