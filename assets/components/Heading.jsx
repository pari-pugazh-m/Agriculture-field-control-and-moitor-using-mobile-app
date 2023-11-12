import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Heading = ({ heading }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          color: "#FFECA7",
          fontWeight: "bold",
          marginVertical: 10,
          textTransform: "uppercase",
          letterSpacing: 2,
          marginHorizontal: 40,
          borderBottomWidth: 2, // Add a border to the bottom
          borderColor: "#FFECA7", // Set the border color
        }}
      >
        {heading}
      </Text>
    </View>
  );
};

export default Heading;
