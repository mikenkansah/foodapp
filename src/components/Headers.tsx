import { View, Image, Text, TouchableOpacity } from "react-native";
import { FONT_BOLD, FONT_REGULAR, ASSETS } from "../constants/Dimensions";

export const Header = () => (
  <View className="flex-row justify-between items-center px-5">
    <View className="flex-row gap-4 items-center">
      <View
        className="w-12 h-12 rounded-full items-center justify-center"
        style={{ backgroundColor: "#ECF0F4" }}
      >
        <Image source={ASSETS.hamburger} className="w-7 h-7" />
      </View>
      <View>
        <Text className="text-[#FC6E2A] uppercase" style={FONT_BOLD}>
          Deliver To
        </Text>
        <View className="flex-row items-center gap-2">
          <Text className="text-[#676767] text-lg" style={FONT_REGULAR}>
            McHarty Hills
          </Text>
          <Image source={ASSETS.arrowDown} className="w-4 h-4" />
        </View>
      </View>
    </View>

    <View
      style={{ backgroundColor: "#181C2E" }}
      className="w-12 h-12 rounded-full relative items-center justify-center"
    >
      <Image source={ASSETS.cartBag} className="w-5 h-5" />
      <View className="bg-[#FC6E2A] rounded-full absolute right-0 py-1 px-2 bottom-8">
        <Text className="text-white text-center text-md" style={FONT_REGULAR}>
          2
        </Text>
      </View>
    </View>
  </View>
);

interface Props {
  title: string;
}
export const SectionHeader = ({ title }: Props) => (
  <View className="flex-row justify-between mt-8 items-center px-5">
    <Text className="text-[#32343E] text-[20px]" style={FONT_REGULAR}>
      {title}
    </Text>
    <TouchableOpacity activeOpacity={0.5}>
      <View className="flex-row gap-3 items-center">
        <Text className="text-[#333333] text-[16px]" style={FONT_REGULAR}>
          See All
        </Text>
        <Image source={ASSETS.arrowForward} />
      </View>
    </TouchableOpacity>
  </View>
);
