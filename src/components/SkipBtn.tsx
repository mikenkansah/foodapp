import { View, Text, TouchableOpacity } from "react-native";

const SkipBtn = () => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View className=" justify-center items-center bg-[#FFFFFF] rounded-xl h-[50px] ">
        <Text
          className="text-[#646982] text-[16px] "
          style={{ fontFamily: "Sen-Bold" }}
        >
          Skip
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SkipBtn;
