import React from "react";
import LoginScreen from "../Screens/LoginScreen";
import SingleProductScreen from "../Screens/SingleProductScreen";
import BottomNav from "../Navigations/BottomNav";
import NotificationsScreen from "../Screens/NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
function StackNav() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
        animationDuration: 1000,
      }}
      initialRouteName="Bottom"
    >
      <Stack.Screen name="Bottom" component={BottomNav} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={LoginScreen} />
      <Stack.Screen name="Product" component={SingleProductScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
    </Stack.Navigator>
  );
}

export default StackNav;
