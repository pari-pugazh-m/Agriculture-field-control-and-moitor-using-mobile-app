import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import { TouchableOpacity } from "react-native";

import ImgButton from "../components/ImgButton";
import { useNavigation } from "@react-navigation/native";

function HomePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0d2812" />
      <Text
        style={{
          color: "#11FB7A",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 25,
          marginBottom: 50,
          left: 30,
        }}
      >
        SmartAgri
      </Text>
      <ImgButton
        img={require("../res/plantHouse.png")}
        title="Field"
        onPress={() => navigation.navigate("MonitorPage")}
      />
      <ImgButton
        img={require("../res/stats.png")}
        title="Stats"
        onPress={() => navigation.navigate("StatsPage")}
      />
      <TouchableOpacity style={{ position: "absolute", bottom: 30, right: 30 }}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d2812",
    flex: 1,
    paddingTop: StatusBar.currentHeight - 10,
  },
  logout: {
    color: "#11FB7A",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default HomePage;
