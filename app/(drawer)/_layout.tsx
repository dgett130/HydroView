import {Drawer} from "expo-router/drawer";

export default function DrawerLayout() {
    return (
      <Drawer
      screenOptions={{ headerShown: true, swipeEdgeWidth: 0 }}>
          <Drawer.Screen
              name="(tabs)"
              options={{
                    title: 'Home',
                  drawerLabel: 'Home',
              }} />
      </Drawer>
    );
}