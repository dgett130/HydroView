import {StyleSheet, Text, View} from "react-native";
import {Avatar, AvatarBadge, AvatarFallbackText, AvatarImage} from "@/components/ui/avatar";
import {HStack} from "@/components/ui/hstack";
import {Box} from "@/components/ui/box";
import {useSharedValue, useAnimatedStyle, withTiming} from "react-native-reanimated";
import Animated from "react-native-reanimated";
import {useEffect} from "react";
import CustomAvatar from "@/app/shared/component/custom-avatar";

const SIZE = 100.0

export default function Index() {

    const progress = useSharedValue(1);
    const reanimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            transform: [{scale: 1}]
        }
    }, [])

    useEffect(() => {
        progress.value = withTiming(0.5, {duration: 4000});
    }, [])

  return (
          <Animated.View style={[reanimatedStyle, styles.container]}>
          <HStack space="md" reversed={false}>
              <Box className="h-20 w-20 border-amber-900 border-2 items-center justify-center">
                  <CustomAvatar fallbackText="Umberto Race" imageUri="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"/>
              </Box>
              <Box className="h-20 w-20 border-amber-900 border-2" />
          </HStack>
      </Animated.View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       justifyContent: 'center',
         alignItems: 'center',
    },
})
