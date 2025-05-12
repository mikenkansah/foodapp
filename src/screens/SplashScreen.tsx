import { View, Image } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Onboarding"
>;
const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    // Navigate to onboarding screen after 2 seconds
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, [navigation]);
  return (
    <View className="flex-1 justify-center items-center bg-white relative">
      <Image source={require("../assets/Logo.png")} />
      <Image
        source={require("../assets/splash1.png")}
        className="absolute top-0 left-0"
      />
      <Image
        source={require("../assets/splash2.png")}
        className="absolute bottom-0 right-0"
      />
    </View>
  );
};

export default SplashScreen;
