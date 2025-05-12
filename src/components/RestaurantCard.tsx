import { View, Image, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  name: string;
  image: string;
  mealId: string;
};
const RestaurantCard = ({ name, image, mealId }: Props) => {
  type DetailScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    "Detail"
  >;
  const navigation = useNavigation<DetailScreenNavigationProp>();

  return (
    <View
      className="mb-[20px]"
      style={{ marginBottom: 30, paddingHorizontal: 15 }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("Detail", { mealId: mealId })}
      >
        <Image
          source={{ uri: image }}
          style={{ width: "auto", height: 160 }}
          className="rounded-2xl"
          resizeMode="cover"
        />
      </TouchableOpacity>
      <Text
        className="text-[#181C2E] text-[20px] mt-2 mb-1"
        style={{ fontFamily: "Sen-Regular" }}
      >
        {name}
      </Text>
      <Text className="text-[#A0A5BA]" style={{ fontFamily: "Sen-Regular" }}>
        Burger - Chiken - Riche - Wings{" "}
      </Text>
      <View className="flex-row gap-6 mt-2">
        <View className="flex-row items-center gap-2">
          <Image source={require("../assets/Star.png")} className="w-4 h-4" />
          <Text style={{ fontFamily: "Sen-Bold" }}>4.7</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Image
            source={require("../assets/Delivery.png")}
            className="w-5 h-4"
          />
          <Text className="text-semibold">Free</Text>
        </View>
        <View className="flex-row items-center  gap-2">
          <Image source={require("../assets/Clock.png")} className="w-4 h-4" />
          <Text className="text-semibold">20 min</Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantCard;
