import { Text, View } from "react-native";
import TabLayout from "@/app/tabs/_layout";

export default function _layout() {
    console.log('Rendering SettingsLayout');

    try {
        return (
            <View style={{ flex: 1 }}>
                <TabLayout />
            </View>
        );
    } catch (error) {
        console.error('Error in HomeLayout:', error);
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Error loading tabs</Text>
            </View>
        );
    }
}
