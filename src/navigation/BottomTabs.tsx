// navigation/BottomTabs.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
// import Ionicons from 'react-native-vector-icons/Ionicons';

// Sample screens

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#f97316", // Tailwind orange-500
        tabBarInactiveTintColor: "#9ca3af", // Tailwind gray-400
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        // tabBarIcon: ({ color, size }) => {
        //   let iconName = '';

        //   if (route.name === 'Home') iconName = 'home-outline';
        //   else if (route.name === 'Search') iconName = 'search-outline';
        //   else if (route.name === 'Profile') iconName = 'person-outline';

        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Search" component={SearchScreen} /> */}
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
