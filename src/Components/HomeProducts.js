import React from "react";
import { Text, ScrollView, Flex, Pressable, Image, Box, Heading, Button } from "native-base";
import Rating from "./Rating";
import products from "../Products";
import Colors from "../Colors";
import { useNavigation } from "@react-navigation/native";
import Slider from "./Slider";

function HomeProducts() {
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false} flex={1}>
      <Slider
        images={[
          "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-91dc9490f14942ad5eeef278eb3ef4a6",
          "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/EGS_VALORANT_RiotGames_S1_2560x1440-91dc9490f14942ad5eeef278eb3ef4a6",
        ]}
      />
      <Flex flexWrap="wrap" direction="row" justifyContent="space-between" px={5}>
        {products.map((p) => (
          <Pressable
            key={p.id}
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
          >
            <Image source={{ uri: p.image.thumbnail }} alt={p.title["tr"]} w="full" h={32} resizeMode="contain" />
            <Box px={4} pt={8}>
              <Text fontSize={12} mt={1} my={2} bold isTruncated numberOfLines={2} w="full" color={Colors.darkestGray}>
                {p.title["tr"]}
              </Text>
              <Rating value={p.rating.rate} text={p.rating.count} />
              <Heading size="sm" bold my={2} color={Colors.darkestGray}>
                ${p.price}
              </Heading>
            </Box>

            <Button
              android_ripple={{ borderless: false }}
              borderWidth={2}
              rounded={8}
              h={10}
              mx={2}
              mt={8}
              mb={2}
              _text={{ color: Colors.darkestGray, fontSize: 12, lineHeight: 12, fontWeight: "bold" }}
              variant="outline"
              _pressed={{
                bg: 1,
              }}
            >
              Add to Cart
            </Button>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}

export default HomeProducts;
