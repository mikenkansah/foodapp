import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";

const CategoriesScreen = () => {
  return (
    <View className="pt-10 px-6 bg-white flex-1">
      <SafeAreaView className="flex-row justify-between">
        <TouchableOpacity
          activeOpacity={0.7}
          // onPress={() => navigation.goBack()}
        >
          <View
            className="w-12 h-12 items-center justify-center rounded-full"
            style={{ backgroundColor: "#ECF0F4" }}
          >
            <Image source={require("../assets/Back.png")} />
          </View>
        </TouchableOpacity>
        <View className="flex-row gap-2">
          <View
            className="bg-[#121223] w-12 h-12 items-center justify-center rounded-full"
            style={{ backgroundColor: "#121223" }}
          >
            <Image source={require("../assets/Search.png")} />
          </View>
          <View
            className="bg-[#ECF0F4] w-12 h-12 items-center justify-center rounded-full"
            style={{ backgroundColor: "#ECF0F4" }}
          >
            <Image source={require("../assets/Filter.png")} />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default CategoriesScreen;
