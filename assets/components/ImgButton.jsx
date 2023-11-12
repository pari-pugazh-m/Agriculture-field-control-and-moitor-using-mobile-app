import React from "react";
import { Image, Text } from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";

function ImgButton({ img = "", title = "", onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={img}
        style={{
          width: 35,
          height: 35,
          marginVertical: 15,
          marginLeft: 40,
          marginRight: 20,
        }}
      />
      <Text style={{ fontSize: 30, color: "#A7FFCA", fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
  },
});
export default ImgButton;
