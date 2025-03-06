import {Tabs} from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Avatar, AvatarBadge, AvatarFallbackText, AvatarImage} from "@/components/ui/avatar";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ headerShown:false, tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="(home)"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="(profile)"
                options={{
                    title: 'Profilo',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
            <Tabs.Screen
                name="(settings)"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({color}) => <FontAwesome size={28} name="wrench" color={color} />
                }}
            />
        </Tabs>
    );
}
