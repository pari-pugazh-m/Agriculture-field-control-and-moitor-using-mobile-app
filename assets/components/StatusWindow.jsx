import { StyleSheet, Text, View } from "react-native";
import React from "react";

const StatusWindow = ({ title, value, color = "#074A25" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={[styles.StatusBox, { backgroundColor: color }]}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

export default StatusWindow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 10,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    marginBottom: 5,
  },
  StatusBox: {
    width: 100,
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});
