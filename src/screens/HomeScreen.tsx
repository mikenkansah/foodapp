import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  RefreshControl,
} from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import { MIN_DIVICE_HEIGHT } from "../constants/Dimensions";
import {
  FONT_BOLD,
  FONT_REGULAR,
  ASSETS,
  categories,
} from "../constants/Dimensions";
import { Header, SectionHeader } from "../components/Headers";
import axios from "axios";
import { RootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type MealCategory = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};
type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type CategoriesScrrenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Categories"
>;
export default function HomeScreen() {
  const { height } = useWindowDimensions();
  const ios = Platform.OS === "ios";
  const { height: deviceHeight } = useWindowDimensions();
  const isSmallDevice = deviceHeight < MIN_DIVICE_HEIGHT;
  const inputPadding = isSmallDevice ? "py-4 px-12" : "px-12 py-5";

  const dismissKeyboard = () => Keyboard.dismiss();
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const [mealCategories, setMealCategories] = useState<MealCategory[]>([]);
  const [restaurants, setRestaurants] = useState<Meal[]>([]);

  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
  const [categoryError, setCategoryError] = useState<string | null>(null);
  const navigation = useNavigation<CategoriesScrrenProp>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get<{ categories: MealCategory[] }>(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setMealCategories(res.data.categories || []);
      } catch (err) {
        setCategoryError("Could not fetch categories");
      } finally {
        setLoadingCategories(false);
      }
    };
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get<{ categories: Meal[] }>(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );

        // const json = await res.json();
        setRestaurants(res.data.meals || []);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();

    fetchCategories();
  }, []);
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const res = await axios.get<{ categories: MealCategory[] }>(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      setMealCategories(res.data.categories || []);
    } catch (err) {
      console.error("Refresh failed:", err);
    } finally {
      setRefreshing(false);
    }
  };

  const renderCategoryItem = ({ item }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("Categories", { catID: "" });
      }}
    >
      <View style={styles.categoryCard}>
        <Image
          source={{ uri: item.strCategoryThumb }}
          style={styles.categoryImage}
          resizeMode="contain"
        />
        <Text style={styles.categoryName}>{item.strCategory}</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.categoryPrice}>Starting </Text>
          <Text style={FONT_BOLD}>$5</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={ios ? "dark-content" : "default"} />
      {/* Header */}
      <Header />

      {/* Greeting */}
      <Text style={styles.greeting}>
        Hey Halal,<Text style={{ fontWeight: "bold" }}> Good Afternoon!</Text>
      </Text>

      {/* Search */}
      <View style={styles.searchBar}>
        <TextInput
          placeholder="Search dishes, restaurants"
          placeholderTextColor="#999"
          style={styles.searchInput}
        />
        <Image source={ASSETS.searchIcon} className="absolute top-5 left-5" />
      </View>

      {/* Categories */}
      <SectionHeader title="All Categories" />

      <View>
        <FlatList
          data={mealCategories}
          horizontal
          keyExtractor={(item) => item.idCategory}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            paddingLeft: 5,
            paddingRight: 5,
          }}
          ItemSeparatorComponent={() => <View style={{ width: 8 }} />}
          renderItem={renderCategoryItem}
        />
      </View>
      {/* Restaurants */}
      <SectionHeader title="Open Restaurants" />
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={restaurants}
          keyExtractor={(item) => item.idMeal}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 5 }}
          renderItem={({ item }) => (
            <RestaurantCard
              name={item.strMeal}
              image={item.strMealThumb}
              mealId={item.idMeal}
            />
          )}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          windowSize={5}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  menuBadge: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 999,
  },
  menuIcon: {
    fontSize: 18,
  },
  deliverTo: {
    fontSize: 12,
    color: "#FF5B5B",
    fontWeight: "bold",
  },
  location: {
    fontSize: 14,
    color: "#333",
  },
  cartBadge: {
    position: "relative",
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 999,
  },
  cartIcon: {
    fontSize: 18,
  },
  notificationDot: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#FF5B5B",
    borderRadius: 8,
    paddingHorizontal: 4,
    paddingVertical: 1,
  },
  notificationCount: {
    color: "#fff",
    fontSize: 10,
  },
  greeting: {
    fontSize: 16,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  searchBar: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginHorizontal: 16,
    paddingHorizontal: 43,
    marginTop: 16,
    position: "relative",
  },
  searchInput: {
    height: 50,
    fontSize: 14,
  },
  sectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1E1D1D",
  },
  seeAll: {
    fontSize: 12,
    color: "#676767",
  },
  categoryCard: {
    width: 120,
    height: 150,
    backgroundColor: "white",
    borderRadius: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
    // flexGrow: 0,
    // flexShrink: 0,
  },
  categoryImage: {
    width: "100%",
    height: 80,
    borderRadius: 12,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
    alignSelf: "flex-start",
    fontFamily: "Sen-Bold",
  },
  categoryPrice: {
    fontSize: 12,
    color: "#676767",
    marginTop: 4,
    alignSelf: "flex-start",
    fontFamily: "Sen-Regular",
  },
  restaurantCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginTop: 16,
    overflow: "hidden",
  },
  restaurantImage: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  restaurantTags: {
    fontSize: 12,
    color: "#777",
    paddingHorizontal: 10,
    marginTop: 4,
  },
  restaurantInfoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  infoText: {
    fontSize: 12,
  },
});
