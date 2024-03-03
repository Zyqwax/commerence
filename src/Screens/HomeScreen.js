import React from "react";
import { View } from "native-base";
import HomeSearch from "../Components/HomeSearch";
import HomeProducts from "../Components/HomeProducts";
import Colors from "../Colors";

function HomeScreen({ navigation }) {
  return (
    <View flex={1} bg={Colors.white}>
      <HomeSearch navigation={navigation} />
      <HomeProducts navigation={navigation} />
    </View>
  );
}

export default HomeScreen;
