import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { useDrawer } from "@/app/context/DrawerContext";

const homeTabs = [
  {
    name: "(home)",
    title: "Home",
    icon: "home",
  },
  {
    name: "(profile)",
    title: "Profilo",
    icon: "user",
  },
  {
    name: "(settings)",
    title: "Settings",
    icon: "wrench",
  },
];

const settingsTabs = [
  {
    name: "(general)",
    title: "Generale",
    icon: "gear",
  },
  {
    name: "(notifications)",
    title: "Notifiche",
    icon: "bell",
  },
  {
    name: "(privacy)",
    title: "Privacy",
    icon: "lock",
  },
];

export default function TabLayout() {
  const { selectedDrawer } = useDrawer();

  const tabs = selectedDrawer === 'd-settings' ? settingsTabs : homeTabs;

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "blue" }}>
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name={tab.icon as any} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
