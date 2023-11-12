import { StyleSheet, Text, StatusBar, View } from "react-native";
import ImgButton from "../components/ImgButton";
import { useNavigation } from "@react-navigation/native";
import PlantUnit, { PlantGrid } from "../components/PlantUint"; // Make sure to import PlantUnit
import Heading from "../components/Heading";

function StatsPage({ crop, health, growthProgress, statuses, errorMesseges }) {
  const navigation = useNavigation();

  // Define an array of "good" and "bad" statuses

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0d2812" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: 40,
        }}
      >
        <ImgButton
          img={require("../res/home.png")}
          onPress={() => navigation.navigate("Home")}
        ></ImgButton>
        <Text style={{ fontSize: 30, color: "#A7FFCA", fontWeight: "bold" }}>
          Statistics
        </Text>
      </View>
      <Heading heading="About Field"></Heading>
      <Text style={styles.title}> - Crop : {crop}</Text>
      <Text style={styles.title}> - Health : {health}</Text>
      <Text style={styles.title}> - Progress : {growthProgress}</Text>
      <Heading heading="Plant Grid"></Heading>
      <PlantGrid
        rows={8}
        columns={4}
        statuses={statuses}
        errorMesseges={errorMesseges}
      ></PlantGrid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d2812",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: "left",
    color: "white",
    marginLeft: 40,
    fontWeight: "bold",
  },
});

export default StatsPage;
