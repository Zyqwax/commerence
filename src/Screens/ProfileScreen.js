import React from "react";
import { Text, Center, Image, Heading, Box, List, Button, Pressable, Spacer, HStack, ScrollView } from "native-base";
import Colors from "../Colors";
import { AntDesign, Feather } from "@expo/vector-icons";

function ProfileScreen() {
  return (
    <Box>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          }}
          alt="Profile Photo"
          w={24}
          h={24}
          rounded="full"
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          Ensg422
        </Heading>
        <Text italic fontSize={10} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile */}
        <Pressable
          android_ripple={{
            borderless: false, // Saçaklılık etkisini kontrol eder, true ise saçaklılık olmaz
          }}
          p={5}
        >
          <HStack>
            <Feather name="user" size={24} color={Colors.darkestGray} />
            <Text px={4}>My Profile</Text>
            <Spacer />
            <AntDesign name="right" size={24} color={Colors.darkGray} />
          </HStack>
        </Pressable>
        {/* Deliveries */}
        <Pressable
          android_ripple={{
            borderless: false, // Saçaklılık etkisini kontrol eder, true ise saçaklılık olmaz
          }}
          p={5}
        >
          <HStack>
            <Feather name="archive" size={24} color={Colors.darkestGray} />
            <Text px={4}>My Deliveries</Text>
            <Spacer />
            <AntDesign name="right" size={24} color={Colors.darkGray} />
          </HStack>
        </Pressable>
        {/* Favories */}
        <Pressable
          android_ripple={{
            borderless: false, // Saçaklılık etkisini kontrol eder, true ise saçaklılık olmaz
          }}
          p={5}
        >
          <HStack>
            <Feather name="heart" size={24} color={Colors.darkestGray} />
            <Text px={4}>Favories</Text>
            <Spacer />
            <AntDesign name="right" size={24} color={Colors.darkGray} />
          </HStack>
        </Pressable>
        {/* Settings */}
        <Pressable
          android_ripple={{
            borderless: false, // Saçaklılık etkisini kontrol eder, true ise saçaklılık olmaz
          }}
          p={5}
        >
          <HStack>
            <Feather name="sliders" size={24} color={Colors.darkestGray} />
            <Text px={4}>Settings</Text>
            <Spacer />
            <AntDesign name="right" size={24} color={Colors.darkGray} />
          </HStack>
        </Pressable>
        {/* Adresses */}
        <Pressable
          android_ripple={{
            borderless: false, // Saçaklılık etkisini kontrol eder, true ise saçaklılık olmaz
          }}
          p={5}
        >
          <HStack>
            <Feather name="map-pin" size={24} color={Colors.darkestGray} />
            <Text px={4}>My Adresses</Text>
            <Spacer />
            <AntDesign name="right" size={24} color={Colors.darkGray} />
          </HStack>
        </Pressable>
        {/* Log Out */}
        <Box>
          <Button
            size="lg"
            variant="outline"
            android_ripple={{ borderless: false }}
            _text={{ color: Colors.darkestGray, fontSize: 15, fontWeight: "medium" }}
            startIcon={<Feather name="log-out" size={24} color={Colors.darkestGray} />}
            my={10}
            mx={6}
            rounded={8}
            borderWidth={2}
            _pressed={{
              bg: 1,
            }}
          >
            Log Out
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
}

export default ProfileScreen;
