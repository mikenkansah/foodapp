import { View, Text, TouchableOpacity } from "react-native";
import { useWindowDimensions } from "react-native";
import { MIN_DIVICE_HEIGHT } from "../constants/Dimensions";

interface ButtonProps {
  children: React.ReactNode;
  onHandleEvent: () => void;
}
const Button = ({ children, onHandleEvent }: ButtonProps) => {
  const deviceHeight = useWindowDimensions().height;
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onHandleEvent}>
      <View
        className={` justify-center items-center bg-[#FF7622] rounded-2xl ${
          deviceHeight < MIN_DIVICE_HEIGHT ? "py-4" : "py-6"
        } `}
      >
        <Text
          className="text-white text-[14px]  uppercase"
          style={{ fontFamily: "Sen-Bold" }}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Button;
