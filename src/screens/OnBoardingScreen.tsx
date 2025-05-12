import {
  SafeAreaView,
  View,
  Image,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  useWindowDimensions,
} from "react-native";
import Button from "../components/Button";
import SkipBtn from "../components/SkipBtn";
import aboutInfo from "../utils/aboutinfo";
import { useState, useRef } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { MIN_DIVICE_HEIGHT } from "../constants/Dimensions";

// Responsive utils
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

const OnBoardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const deviceHeight = useWindowDimensions().height;

  const handleNext = () => {
    if (currentIndex < aboutInfo.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const screenWidth = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(scrollPosition / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <FlatList
        ref={flatListRef}
        data={aboutInfo}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onScroll={onScroll}
        scrollEventThrottle={16}
        getItemLayout={(data, index) => ({
          length: wp("100%"),
          offset: wp("100%") * index,
          index,
        })}
        renderItem={({ item }) => (
          <View
            style={{
              width: wp("100%"),
              alignItems: "center",
              flex: 1,
            }}
          >
            <View
              style={{
                marginTop:
                  deviceHeight < MIN_DIVICE_HEIGHT ? hp("6%") : hp("8%"),
                width: wp("80%"),
                height:
                  deviceHeight < MIN_DIVICE_HEIGHT ? hp("40%") : hp("35%"),
              }}
            >
              <Image
                source={item.image}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>

            <View
              style={{
                width: wp("100%"),
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Sen-Bold",
                  color: "#32343E",
                  fontSize: deviceHeight < MIN_DIVICE_HEIGHT ? 18 : 24,
                  marginTop:
                    deviceHeight < MIN_DIVICE_HEIGHT ? hp("4%") : hp("8%"),
                  textAlign: "center",
                }}
              >
                {item.heading}
              </Text>

              <Text
                style={{
                  fontFamily: "Sen-Regular",
                  color: "#646982",
                  fontSize: deviceHeight < MIN_DIVICE_HEIGHT ? 14 : 17,
                  marginTop: hp("2%"),
                  // width: wp("95%"),
                  paddingHorizontal: 20,

                  textAlign: "center",
                }}
              >
                {item.paragraph}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Pagination dots */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
          // marginTop: hp("2%"),
        }}
      >
        {aboutInfo.map((_, index) => (
          <View
            key={index}
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: index === currentIndex ? "#FF7622" : "#FFE1CE",
            }}
          />
        ))}
      </View>

      {/* Buttons */}
      <View
        style={{
          width: "100%",
          paddingHorizontal: 20,
          marginTop: deviceHeight < MIN_DIVICE_HEIGHT ? hp("10%") : hp("9%"),
          marginBottom:
            currentIndex === 3
              ? deviceHeight < MIN_DIVICE_HEIGHT
                ? hp("11.1%")
                : hp("8.4%")
              : hp("3%"),
        }}
      >
        {currentIndex === 3 ? (
          <View>
            <Button onHandleEvent={goToLogin}>Get Started</Button>
          </View>
        ) : (
          <Button onHandleEvent={handleNext}>Next</Button>
        )}

        {currentIndex !== 3 && <SkipBtn />}
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
