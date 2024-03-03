import React, { useState } from "react";
import { Box, ScrollView, Image, Heading, HStack, Spacer, Text, Fab, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import NumericInput from "react-native-numeric-input";
import Colors from "../Colors";
import Rating from "../Components/Rating";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";

function SingleProductScreen({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const { product } = route.params;
  return (
    <Box safeArea flex={1} bg={Colors.white} pt={5}>
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
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image source={{ uri: product.image.thumbnail }} alt="Image" w="full" h={300} resizeMode="contain" />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.title["tr"]}
        </Heading>
        <Rating value={product.rating.rate} size={15} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            onChange={(val) => setValue(val)}
            totalWidth={140}
            totalHeight={40}
            iconSize={25}
            step={1}
            maxValue={product.countInStock}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            {product.price}$
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description["tr"]}
        </Text>
        <Buttone bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CARD
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
