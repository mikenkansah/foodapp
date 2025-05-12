import { View, Text, Image, TextInput } from "react-native";
import { MIN_DIVICE_HEIGHT } from "../constants/Dimensions";
import { useWindowDimensions } from "react-native";
interface InputProps {
  label: string;
  placeholder: string;
  secure: boolean;
}
const InputField = ({ label, placeholder, secure = false }: InputProps) => {
  const deviceHeight = useWindowDimensions().height;

  const isSmallDevice = deviceHeight < MIN_DIVICE_HEIGHT;

  const inputPadding = isSmallDevice ? "p-4" : "p-6";
  return (
    <View className="mb-8 relative">
      <Text className="text-[#32343E] mb-2 uppercase">{label}</Text>
      <TextInput
        className={`bg-[#F0F5FA] rounded-2xl ${inputPadding}`}
        placeholder={placeholder}
        secureTextEntry={secure}
        keyboardType={label === "Email" ? "email-address" : "default"}
      />
      {label === "Password" && (
        <Image
          source={require("../assets/eye.png")}
          className="absolute right-4 top-12"
        />
      )}
    </View>
  );
};

export default InputField;
