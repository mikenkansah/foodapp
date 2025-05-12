import {
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Image,
  Text,
  ImageSourcePropType,
  StatusBar,
} from "react-native";
import Checkbox from "../components/CheckBox";
import Button from "../components/Button";
import { MIN_DIVICE_HEIGHT } from "../constants/Dimensions";
import { useWindowDimensions } from "react-native";
import InputField from "../components/InputField";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const deviceHeight = useWindowDimensions().height;
  const isSmallDevice = deviceHeight < MIN_DIVICE_HEIGHT;
  const titleSize = isSmallDevice ? "text-xl mb-1" : "text-3xl mb-2";
  const subtitleSize = isSmallDevice ? "text-sm" : "text-md";
  const spacer = isSmallDevice ? "mt-6" : "mt-10";
  const iconSize = isSmallDevice ? 40 : 50;
  const imageSize = isSmallDevice ? "w-4 h-4" : "w-6 h-6";
  const textSize = isSmallDevice ? "text-md" : "text-xl";

  interface SocialProps {
    bg: string;
    icon: ImageSourcePropType;
  }
  type SplashScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Home"
  >;
  const navigation = useNavigation<SplashScreenNavigationProp>();

  const onLogin = () => {
    navigation.navigate("Home");
  };

  const SocialButton = ({ bg, icon }: SocialProps) => (
    <View
      className="rounded-full justify-center items-center"
      style={{ backgroundColor: bg, width: iconSize, height: iconSize }}
    >
      <Image source={icon} className={imageSize} resizeMode="contain" />
    </View>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-[#1E1E2E] relative">
        <StatusBar barStyle={"light-content"} />

        <Image
          source={require("../assets/splash1.png")}
          className="absolute top-0 left-0"
        />
        <Image
          source={require("../assets/Vector142.png")}
          className="absolute top-0 right-0"
        />

        <SafeAreaView
          className={`flex-[0.1] justify-center items-center ${
            isSmallDevice ? "mt-16" : "mt-20"
          }`}
        >
          <Text className={`text-[#FFFFFF] font-bold ${titleSize}`}>
            Log In
          </Text>
          <Text className={`text-[#FFFFFF] ${subtitleSize}`}>
            Please sign in to your existing account
          </Text>
        </SafeAreaView>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className={`flex-[0.9] bg-white rounded-t-3xl p-6 ${
            isSmallDevice ? "mt-[30px]" : "mt-[80px]"
          } `}
        >
          <InputField
            label="Email"
            placeholder="example@email.com"
            secure={false}
          />
          <InputField label="Password" placeholder="............." secure />

          <View className="flex-row justify-between mt-2">
            <View className="flex-row items-center gap-2">
              <Checkbox />
              <Text className="text-[#7E8A97]">Remember Me</Text>
            </View>
            <Text className="text-md text-[#FF7622]">Forgot Password?</Text>
          </View>

          <View className={spacer}>
            <Button onHandleEvent={onLogin}>Login</Button>
          </View>

          <View
            className={`flex-row justify-center items-center gap-3 ${spacer}`}
          >
            <Text>Don’t have an account?</Text>
            <Text className="uppercase text-[#FF7622] font-bold">Sign Up</Text>
          </View>

          <View className={`justify-center items-center ${spacer}`}>
            <Text className={`text-[#646982] ${textSize}`}>Or</Text>
            <View className={`flex-row gap-4 ${spacer}`}>
              {[
                { bg: "#395998", icon: require("../assets/facebook.png") },
                { bg: "#169CE8", icon: require("../assets/twitter.png") },
                { bg: "#1B1F2F", icon: require("../assets/apple.png") },
              ].map((btn, index) => (
                <SocialButton key={index} {...btn} />
              ))}
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
