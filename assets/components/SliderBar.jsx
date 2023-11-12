import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";

function SliderBar({
  title,
  value,
  onValueChange,
  onSave,
  minValue,
  maxValue,
}) {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#F6F3E8", fontWeight: "bold", fontSize: 18 }}>
        {title} : {value}
      </Text>
      <View style={styles.sliderContainer}>
        <View style={styles.sliderValues}>
          <Text style={styles.sliderValue}>{minValue}</Text>
          <Text style={styles.sliderValue}>{maxValue}</Text>
        </View>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={minValue}
          maximumValue={maxValue}
          minimumTrackTintColor="#A7FFCA"
          thumbTintColor="#11FB7A"
          step={1}
          trackStyle={{ height: 40, borderRadius: 10 }}
          value={value}
          onValueChange={onValueChange}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={onSave}>
          <Text
            style={{
              color: "#A1FFCA",
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    bottom: 0,
    borderRadius: 10,
    height: 195,
    marginHorizontal: 20,
    padding: 20,
    position: "absolute",
    width: "90%",
  },
  sliderContainer: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 20,
    marginHorizontal: 30,
  },
  sliderValues: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginVertical: 5,
    marginHorizontal: 30,
  },
  sliderValue: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "#0D2818",
    padding: 10,
    width: 80,
  },
});

export default SliderBar;
