import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import CardScreen from "../Screens/CardScreen";
import { FontAwesome5, AntDesign, Feather } from "@expo/vector-icons";
import Colors from "../Colors";
import { StyleSheet } from "react-native";

function BottomNav() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="main"
      initialRouteName="Main"
      screenOptions={{
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          color: Colors.darkestGray,
          marginBottom: 5,
          fontWeight: "400",
        },
        tabBarActiveTintColor: Colors.main,
        tabBarInactiveTintColor: Colors.darkestGray,
      }}
    >
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="home" size={28} color={color} />,
        }}
      />
      {/* Card */}
      <Tab.Screen
        name="Card"
        component={CardScreen}
        options={{
          tabBarIcon: ({ color }) => <Feather name="shopping-cart" size={28} color={color} />,
        }}
      />
      {/* Profile */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome5 name="user-circle" size={28} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tab: {
    elevation: 0,
    backgroundColor: Colors.white,
    height: 60,
  },
});

export default BottomNav;
