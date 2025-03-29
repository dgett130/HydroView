import TabLayout from '@/app/tabs/_layout';
import { View, Text } from 'react-native';

export default function HomeLayout() {
  console.log('Rendering HomeLayout');
  
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