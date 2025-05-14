import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import Button from "../components/Button";
import { FONT_BOLD, FONT_REGULAR } from "../constants/Dimensions";
import Ingredients from "../components/Ingredients";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { RootStackParamList } from "../../App";

type DetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Detail"
>;
type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">;

const DetailScreen = () => {
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const route = useRoute<DetailScreenRouteProp>();
  const { mealId } = route.params;

  const [mealDetail, setMealDetail] = useState<any>(null);

  useEffect(() => {
    const fetchMealDetail = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        setMealDetail(res.data.meals?.[0] || null);
      } catch (err) {
        console.error("Error fetching meal detail", err);
      }
    };

    fetchMealDetail();
  }, [mealId]);

  if (!mealDetail) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text>Loading meal details...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white relative pb-[80px]">
      <StatusBar barStyle={"light-content"} />
      <ImageBackground
        source={{ uri: mealDetail.strMealThumb }}
        className="w-full h-[37%] bg-cover rounded-b-[30px] p-6"
        resizeMode="cover"
        imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
      >
        <SafeAreaView
          className="flex-row justify-between"
          style={{ paddingTop: 20 }}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <View className="bg-white w-12 h-12 items-center justify-center rounded-full">
              <Image source={require("../assets/Back.png")} />
            </View>
          </TouchableOpacity>
          <View className="bg-white w-12 h-12 items-center justify-center rounded-full">
            <Image source={require("../assets/Favorite.png")} />
          </View>
        </SafeAreaView>
      </ImageBackground>

      <ScrollView
        className=" p-6"
        style={{ marginBottom: 180 }}
        showsVerticalScrollIndicator={false}
      >
        <Text
          className=" text-[20px] text-[#181C2E] font-bold mt-2"
          style={{ fontFamily: "Sen-Bold" }}
        >
          {mealDetail.strMeal}
        </Text>

        <View className="flex-row items-center gap-2 mt-2">
          <Image
            source={require("../assets/ChefImage.png")}
            className="w-4 h-4"
          />
          <Text style={{ fontFamily: "Sen-Regular" }}>
            {mealDetail.strArea}
          </Text>
        </View>

        <View className="flex-row gap-6 mt-4">
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
          <View className="flex-row items-center gap-2">
            <Image
              source={require("../assets/Clock.png")}
              className="w-4 h-4"
            />
            <Text className="text-semibold">20 min</Text>
          </View>
        </View>

        <Text className="text-[#A0A5BA] text-[15px] mt-6 mb-1 leading-6">
          {mealDetail.strInstructions}
        </Text>

        <View className="flex-row gap-4 items-center mt-4 mb-2">
          <Text>SIZE:</Text>
          <View className="flex-row gap-4 items-center">
            <View className="w-12 h-12 bg-[#F0F5FA] rounded-full items-center justify-center">
              <Text style={FONT_REGULAR}>10"</Text>
            </View>
            <View className="w-12 h-12 bg-[#F58D1D]  rounded-full items-center justify-center">
              <Text className="text-white text-[18px]" style={FONT_REGULAR}>
                14"
              </Text>
            </View>
            <View className="w-12 h-12 bg-[#F0F5FA] rounded-full items-center justify-center">
              <Text style={FONT_REGULAR}>18"</Text>
            </View>
          </View>
        </View>
        {/* Optional: Ingredients if you parse them from strIngredient1...strIngredient20 */}
        <Ingredients />
      </ScrollView>

      <View className="absolute bottom-0 w-full px-8 py-6 bg-[#F0F5FA] rounded-t-[30px]">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-[#181C2E] text-[28px]" style={FONT_REGULAR}>
            $32
          </Text>
          <View className="bg-[#121223] px-[9px] py-[7px] rounded-3xl flex-row items-center gap-4">
            <View className="bg-[#41414F] w-8 h-8 items-center justify-center rounded-full">
              <Image source={require("../assets/Minus.png")} />
            </View>
            <Text className="text-white " style={FONT_BOLD}>
              2
            </Text>
            <View className="bg-[#41414F] w-8 h-8 items-center justify-center rounded-full">
              <Image source={require("../assets/Plus.png")} />
            </View>
          </View>
        </View>
        <Button onHandleEvent={() => {}}>Add To Cart</Button>
      </View>
    </View>
  );
};

export default DetailScreen;
