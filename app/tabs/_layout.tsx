import {Tabs} from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

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
    name: "(notifications)",
    title: "Notifications",
    icon: "bell",
  },
];

export default function TabLayout() {
  console.log('Rendering TabLayout');
  
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "blue" }}>
      {homeTabs.map((tab) => (
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
