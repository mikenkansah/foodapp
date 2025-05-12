import React from "react";
import { Image, View, Text, Pressable } from "react-native";

interface CardProps {
  name: string;
  price: number;
  image: string;
}

const CategoryCard = ({ name, price, image }: CardProps) => {
  return (
    <Pressable
      onPress={() => {
        // alert("hello");
        console.log("somethinggggggggggggggggg");
      }}
    >
      <View
        style={{
          width: 120,
          backgroundColor: "white",
          borderRadius: 16,
          padding: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 3.84,
          elevation: 2,
        }}
      >
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: 80, borderRadius: 12 }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            color: "#32343E",
            marginTop: 8,
            fontFamily: "Sen-Bold",
          }}
        >
          {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              color: "#646982",
              fontFamily: "Sen-Regular",
            }}
          >
            Startinggg
          </Text>
          <Text
            style={{ fontSize: 14, color: "#32343E", fontFamily: "Sen-Bold" }}
          >
            ${price}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CategoryCard;
