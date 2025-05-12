import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack"; // 👈 change

import SplashScreen from "./src/screens/SplashScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import "./global.css";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import DetailScreen from "./src/screens/DetailsScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Home: undefined;
  Detail: { mealId: string };
  Categories: { catID: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Sen-Bold": require("./src/assets/fonts/Sen-Bold.ttf"),
    "Sen-Regular": require("./src/assets/fonts/Sen-Regular.ttf"),
    // "Sen-Italic": require("./src/assets/fonts/Sen-Italic.ttf"),
  });
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false, // 🔒 Disables swipe back
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 👈 swipe animation
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
