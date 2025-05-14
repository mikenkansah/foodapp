import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import DetailScreen from "./src/screens/DetailsScreen";
import CategoriesScreen from "./src/screens/CategoriesScreen";
import BottomTabs from "./src/navigation/BottomTabs";
import "./global.css";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
export type RootStackParamList = {
  Home: undefined;
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Tabs: undefined; // 👈 BottomTabs entry point
  Detail: { mealId: string };
  Categories: { catID: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Sen-Bold": require("./src/assets/fonts/Sen-Bold.ttf"),
    "Sen-Regular": require("./src/assets/fonts/Sen-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />

        {/* 👇 Replace Home with Tabs */}
        {/* <Stack.Screen name="Tabs" component={BottomTabs} /> */}

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ gestureEnabled: true }}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ gestureEnabled: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
