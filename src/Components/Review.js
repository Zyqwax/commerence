import React, { useState } from "react";
import { Box, FormControl, HStack, Heading, IconButton, Text, TextArea, VStack } from "native-base";
import Colors from "../Colors";
import Rating from "./Rating";
import Buttone from "./Buttone";
import Message from "./Message";
import { FontAwesome } from "@expo/vector-icons";
function Review() {
  const [rating, setRating] = useState(0);
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* THERE IS NO REVIEW */}
      <Message color={Colors.main} bg={Colors.deepGray} bold children={"THERE IS NO REVIEW"} />
      {/* REVIEW */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          Jan 12 2023
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        />
      </Box>
      {/* WRITE REVIEW */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <HStack>
              <IconButton
                _icon={{ as: FontAwesome, name: rating >= 1 ? "star" : "star-o", color: Colors.orange }}
                onPress={() => setRating(1)}
              />
              <IconButton
                _icon={{ as: FontAwesome, name: rating >= 2 ? "star" : "star-o", color: Colors.orange }}
                onPress={() => setRating(2)}
              />
              <IconButton
                _icon={{ as: FontAwesome, name: rating >= 3 ? "star" : "star-o", color: Colors.orange }}
                onPress={() => setRating(3)}
              />
              <IconButton
                _icon={{ as: FontAwesome, name: rating >= 4 ? "star" : "star-o", color: Colors.orange }}
                onPress={() => setRating(4)}
              />
              <IconButton
                _icon={{ as: FontAwesome, name: rating >= 5 ? "star" : "star-o", color: Colors.orange }}
                onPress={() => setRating(5)}
              />
            </HStack>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>

            <TextArea
              h={20}
              w="full"
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{
                bg: Colors.subGreen,
              }}
              placeholder="Your opinions..."
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            Submit
          </Buttone>
          {/* IF NOT LOGIN */}
          <Message color={Colors.white} bg={Colors.black} children={"Please 'Login' to write a review"} />
        </VStack>
      </Box>
    </Box>
  );
}

export default Review;
