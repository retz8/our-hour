import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./home";
import DiaryUpload from "./diary-upload";
import DiaryChat from "./diary-chat";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="diary-upload" component={DiaryUpload} />
        <Stack.Screen name="diary-chat" component={DiaryChat} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
