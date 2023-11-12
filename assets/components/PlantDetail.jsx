// PlantDetail.js
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const PlantDetail = ({
  index,
  health,
  onDoneButtonClick,
  goodMessage,
  errorMessage,
}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#F6F3E8",
          fontWeight: "bold",
          fontSize: 18,
          alignSelf: "center",
          borderBottomWidth: 1, // Add a border to the bottom
          borderColor: "#FFECA7",
          marginBottom: 10,
        }}
      >
        Index: {index}
      </Text>
      <Text
        style={{
          color: health === "Good" ? "green" : "red",
          fontSize: 20,
          alignSelf: "center",
        }}
      >
        {health === "Good" ? goodMessage : errorMessage}
      </Text>
      <TouchableOpacity style={styles.doneButton} onPress={onDoneButtonClick}>
        <Text style={{ color: "white" }}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    top: 14,
    borderRadius: 10,
    height: 140,
    marginHorizontal: 20,
    padding: 20,
    alignSelf: "center",
    width: "60%",
  },
  doneButton: {
    backgroundColor: "green",
    marginTop: 10,
    width: "50%",
    padding: 10,
    alignSelf: "center",
    borderRadius: 5,
    alignItems: "center",
  },
});

export default PlantDetail;
