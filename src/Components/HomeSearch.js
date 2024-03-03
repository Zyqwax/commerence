import React from "react";
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import { HStack, Input, Pressable } from "native-base";
import Colors from "../Colors";
import { useNavigation } from "@react-navigation/native";

function HomeSearch() {
  const navigation = useNavigation();
  return (
    <HStack space={1} w="full" px={6} bg={Colors.main} py={4} alignItems="center" safeAreaTop>
      <Input
        leftElement={<AntDesign name="search1" color={Colors.darkGray} size={24} style={{ marginLeft: 12 }} />}
        placeholder="Product, Category or Brand"
        w="90%"
        bg={Colors.white}
        type="search"
        h={12}
        borderWidth={1}
        borderColor={Colors.darkGray}
        rounded={5}
        variant="filled"
        _focus={{
          bg: Colors.white,
        }}
      />
      <Pressable ml={3} onPress={() => navigation.navigate("Notifications")}>
        <FontAwesome5 name="bell" size={24} color={Colors.white} />
      </Pressable>
    </HStack>
  );
}

export default HomeSearch;
