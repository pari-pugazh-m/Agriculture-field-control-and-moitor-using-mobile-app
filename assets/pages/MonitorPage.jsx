import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
} from "react-native";
import ImgButton from "../components/ImgButton";
import { useNavigation } from "@react-navigation/native";
import StatusWindow from "../components/StatusWindow";
import SliderBar from "../components/SliderBar";
import LevelIndicator from "../components/LevelIndicator";
import Heading from "../components/Heading";

function MonitorPage({ statusValues, setStatusValues }) {
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderVisible, setSliderVisible] = useState(false);
  const [sliderMinValue, setSliderMinValue] = useState(0);
  const [sliderMaxValue, setSliderMaxValue] = useState(100);

  const handleStatusSelect = (statusTitle) => {
    setSliderVisible(true);
    setSelectedStatus(statusTitle);
    setSliderValue(statusValues[statusTitle]);
    const minValue = getMinValueForStatus(statusTitle);
    const maxValue = getMaxValueForStatus(statusTitle);
    setSliderMinValue(minValue);
    setSliderMaxValue(maxValue);
  };

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const handleSave = () => {
    setStatusValues((prevStatusValues) => ({
      ...prevStatusValues,
      [selectedStatus]: sliderValue,
    }));
    setSliderVisible(false);
  };

  const navigation = useNavigation();

  const getMinValueForStatus = (statusTitle) => {
    switch (statusTitle) {
      case "Temp":
        return 30;
      case "Light":
        return 400;
      case "Humidity":
        return 0;
      case "Moisture":
        return 0;
      case "pH":
        return 4;
      case "CO2":
        return 0;
      default:
        return 0;
    }
  };

  const getMaxValueForStatus = (statusTitle) => {
    switch (statusTitle) {
      case "Temp":
        return 40;
      case "Light":
        return 700;
      case "Humidity":
        return 100;
      case "Moisture":
        return 100;
      case "pH":
        return 8;
      case "CO2":
        return 100;
      default:
        return 100;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0d2812" />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: 40,
          marginBottom: 20,
        }}
      >
        <ImgButton
          img={require("../res/home.png")}
          onPress={() => navigation.navigate("Home")}
        ></ImgButton>
        <Text style={{ fontSize: 30, color: "#A7FFCA", fontWeight: "bold" }}>
          Monitor Page
        </Text>
      </View>
      <Heading heading={"Ambience"} />

      <View style={styles.widgetContainer}>
        <TouchableOpacity onPress={() => handleStatusSelect("Temp")}>
          <StatusWindow
            title="Temp (c)"
            value={statusValues["Temp"]}
            updatedValue={
              sliderVisible && selectedStatus === "Temp" ? sliderValue : null
            }
          ></StatusWindow>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStatusSelect("Light")}>
          <StatusWindow
            title="Light (lux)"
            value={statusValues["Light"]}
            updatedValue={
              sliderVisible && selectedStatus === "Light" ? sliderValue : null
            }
          ></StatusWindow>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStatusSelect("Humidity")}>
          <StatusWindow
            title="Humidity (%)"
            value={statusValues["Humidity"]}
            updatedValue={
              sliderVisible && selectedStatus === "Humidity"
                ? sliderValue
                : null
            }
          ></StatusWindow>
        </TouchableOpacity>
      </View>
      <View style={styles.widgetContainer}>
        <TouchableOpacity onPress={() => handleStatusSelect("Moisture")}>
          <StatusWindow
            title="Moisture (%)"
            value={statusValues["Moisture"]}
            updatedValue={
              sliderVisible && selectedStatus === "Moisture"
                ? sliderValue
                : null
            }
          ></StatusWindow>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStatusSelect("pH")}>
          <StatusWindow
            title="pH"
            value={statusValues["pH"]}
            updatedValue={
              sliderVisible && selectedStatus === "pH" ? sliderValue : null
            }
          ></StatusWindow>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleStatusSelect("CO2")}>
          <StatusWindow
            title="CO2 (%)"
            value={statusValues["CO2"]}
            updatedValue={
              sliderVisible && selectedStatus === "CO2" ? sliderValue : null
            }
          ></StatusWindow>
        </TouchableOpacity>
      </View>

      <Heading heading={"Resource Level"} />

      <View style={styles.idicatorContainer}>
        <LevelIndicator title="Water" level={70} color="#11A7FB" />
      </View>
      <View style={styles.idicatorContainer}>
        <LevelIndicator title="CO2" level={60} color="#4E4E4E" />
      </View>

      {sliderVisible && (
        <SliderBar
          title={selectedStatus}
          value={sliderValue}
          onValueChange={handleSliderChange}
          onSave={() => {
            handleSave();
          }}
          minValue={sliderMinValue}
          maxValue={sliderMaxValue}
        ></SliderBar>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0d2812",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  widgetContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  idicatorContainer: {
    marginVertical: 10,
  },
});

export default MonitorPage;
