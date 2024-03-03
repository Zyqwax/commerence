import React from "react";
import { Text, Box, Center } from "native-base";
import Colors from "../Colors";
import EmptyCard from "../Components/EmptyCard";
import CardItems from "../Components/CardItems";

function CardScreen() {
  return (
    <Box flex={1} safeAreaTop bg={Colors.subGreen}>
      {/* HEADER */}
      <Center w="full" py={5}>
        <Text color={Colors.black} fontSize={20} bold>
          Cart
        </Text>
      </Center>
      {/* IF CARD IS EMPTY */}
      <EmptyCard />
      {/* CARD ITEMS */}
      {/* <ScrollView showsVerticalScrollIndicator={false}>
        <CardItems />
      </ScrollView> */}
    </Box>
  );
}

export default CardScreen;
