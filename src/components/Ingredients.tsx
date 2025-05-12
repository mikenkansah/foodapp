import { View, Text, Image } from "react-native";
import { FONT_BOLD, FONT_REGULAR } from "../constants/Dimensions";

const Ingredients = () => {
  return (
    <View>
      <Text
        className="text-[#32343E] text-[15px] uppercase mt-4 mb-4"
        style={FONT_REGULAR}
      >
        Ingredients
      </Text>
      <View className="flex-row gap-4 items-center mb-4">
        <View className="bg-[#FFEBE4] w-12 h-12 rounded-full flex-row items-center justify-center gap-2">
          <Image source={require("../assets/Kivo.png")} />
        </View>
        <View className="bg-[#FFEBE4] w-12 h-12 rounded-full flex-row items-center justify-center gap-2">
          <Image source={require("../assets/Spice.png")} />
        </View>
        <View className="bg-[#FFEBE4] w-12 h-12 rounded-full flex-row items-center justify-center gap-2">
          <Image source={require("../assets/Chilli.png")} />
        </View>
        <View className="bg-[#FFEBE4] w-12 h-12 rounded-full flex-row items-center justify-center gap-2">
          <Image source={require("../assets/Onion.png")} />
        </View>
        <View className="bg-[#FFEBE4] w-12 h-12 rounded-full flex-row items-center justify-center gap-2">
          <Image source={require("../assets/Pepper.png")} />
        </View>
      </View>
    </View>
  );
};
export default Ingredients;
