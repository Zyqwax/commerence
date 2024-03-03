import React, { useRef, useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { FlatList, View, Image, Text } from "native-base";

const IMAGE_WIDTH = Dimensions.get("window").width;
const IMAGE_HEIGHT = 200;

const Slider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const nextImageIndex = (currentIndex + 1) % images.length;
    const timer = setTimeout(() => {
      setCurrentIndex(nextImageIndex);
      sliderRef.current.scrollToIndex({ animated: true, index: nextImageIndex });
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const visibleIndex = viewableItems[0].index || 0;
      setCurrentIndex(visibleIndex);
    }
  });

  const renderItem = ({ item }) => {
    return (
      <View w={IMAGE_WIDTH} h={IMAGE_HEIGHT} p={5}>
        <Image source={{ uri: item }} w="100%" h="100%" resizeMode="cover" alt="Image" rounded="xl" />
      </View>
    );
  };

  return (
    <View flex={1}>
      <FlatList
        ref={sliderRef}
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
      <View position="absolute" top={5} right={5} bg="rgba(0, 0, 0, 0.6)" p={2} rounded="2xl">
        <Text color="white">{`${currentIndex + 1}/${images.length}`}</Text>
      </View>
    </View>
  );
};

export default Slider;
