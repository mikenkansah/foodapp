import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Select from "../components/Select";
import CategoryCard from "../components/CategoriesCard";
import FilterModal from "../components/modals/FilterModal";
import { useState } from "react";
const CategoriesScreen = () => {
  const navigation = useNavigation();
  const [isVisible, setModalVisible] = useState<boolean>(false);
  return (
    <View className="p-6 bg-white flex-1 ">
      <SafeAreaView
        className="flex-row justify-between"
        style={{ marginTop: 10 }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
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
          <Pressable
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <View
              className="bg-[#ECF0F4] w-12 h-12 items-center justify-center rounded-full"
              style={{ backgroundColor: "#ECF0F4" }}
            >
              <Image source={require("../assets/Filter.png")} />
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
      <FlatList
        data={[0, 1, 2, 3]}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        // columnWrapperStyle={{ gap: 12, paddingHorizontal: 12 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, padding: 6 }}>
              <CategoryCard
                name="Burger Bistroo"
                price={30}
                image="https://unsplash.com/photos/burger-with-lettuce-and-tomato-uBigm8w_MpA"
              />
            </View>
          );
        }}
      />
      <FilterModal isOpen={isVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default CategoriesScreen;
