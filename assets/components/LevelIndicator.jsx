import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function LevelIndicator({ title, level, color }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f2f2f2",
      marginHorizontal: 40,
      borderRadius: 5,
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 3,
    },
    indicatorContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    indicator: {
      backgroundColor: color,
      height: 27,
      borderRadius: 5,
      width: `${level}%`,
    },
    title: {
      marginLeft: 40,
      marginBottom: 10,
      fontSize: 18,
      textAlign: "left",
      color: "white",
    },
  });

  return (
    <View>
      <Text style={styles.title}>
        {title} : {level} %
      </Text>
      <View style={styles.container}>
        <View style={styles.indicatorContainer}>
          <View style={styles.indicator} />
        </View>
      </View>
    </View>
  );
}

export default LevelIndicator;
