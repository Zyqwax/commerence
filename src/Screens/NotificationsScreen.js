import React from "react";
import { Box, Flex, HStack, Heading, ScrollView, Pressable, Fab, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../Colors";
import { useNavigation } from "@react-navigation/native";

function NotificationsScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} bg={Colors.white} safeArea>
      <Fab
        position="absolute"
        bg={Colors.gray}
        top={8}
        left={4}
        h={12}
        w={12}
        size="sm"
        icon={<Icon color={Colors.darkestGray} as={<FontAwesome5 name="arrow-left" />} size="md" />}
        onPress={() => navigation.goBack()}
      />
      <HStack bg={Colors.main} py={4} alignItems="center" justifyContent="center">
        <Heading fontSize={18} color={Colors.white} fontWeight="normal">
          Notification Center
        </Heading>
      </HStack>

      <ScrollView showsVerticalScrollIndicator={false} flex={1}>
        <Flex px={5}>
          {[1, 2].map((p) => (
            <Pressable
              key={p}
              flexBasis="49%"
              bg={Colors.white}
              rounded="md"
              shadow={2}
              pt={2}
              my={3}
              overflow="hidden"
              borderColor={Colors.gray}
              borderWidth={1}
              onPress={() => navigation.navigate("Product", { product: p })}
            ></Pressable>
          ))}
        </Flex>
      </ScrollView>
    </Box>
  );
}

export default NotificationsScreen;
