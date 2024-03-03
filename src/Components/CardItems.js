import { Box, Center, HStack, Image, Pressable } from "native-base";
import React from "react";
import Colors from "../Colors";

const renderItems = (data) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack alignItems="center" bg={Colors.white} shadow={1} rounded={10} overflow="hidden">
        <Center w="25%" bg={Colors.deepGray}>
          <Image source={{ uri: data.item.image }} alt={data.item.title} w="full" h={24} resizeMode="cover" />
        </Center>
      </HStack>
    </Box>
  </Pressable>
);
function CardItems() {
  return <Box mr={6}></Box>;
}

export default CardItems;
