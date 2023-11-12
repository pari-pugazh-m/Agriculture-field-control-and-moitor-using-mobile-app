import React, { Component, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import PlantDetail from "./PlantDetail"; // Import your PlantDetail component

export default class PlantUnit extends Component {
  render() {
    const { number, isGood, onPress } = this.props;
    const backgroundColor = isGood ? "green" : "red";
    const borderColor = isGood ? "darkgreen" : "darkred";

    return (
      <TouchableOpacity onPress={() => onPress(number)}>
        <View style={[styles.square, { backgroundColor, borderColor }]}>
          <Text style={styles.number}>{number}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 40,
    height: 40,
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 4,
    borderStyle: "solid",
  },
  number: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});

export class PlantGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlant: null,
    };
  }

  handlePlantClick = (number) => {
    this.setState({ selectedPlant: number });
  };

  handleDoneButtonClick = () => {
    this.setState({ selectedPlant: null });
  };
  getPlantStatusMessage = (isGood, index, errorMesseges) => {
    if (isGood) {
      return { health: "Good", goodMessage: "This plant is healthy." };
    } else {
      const errorMessage = errorMesseges[index];
      return errorMessage
        ? { health: "Bad", errorMessage }
        : { health: "Bad", errorMessage: "This plant needs attention." };
    }
  };
  render() {
    const { rows, columns, statuses, errorMesseges } = this.props;
    const { selectedPlant } = this.state;

    const grid = [];
    let number = 1;

    for (let row = 1; row <= rows; row++) {
      const rowUnits = [];
      for (let col = 1; col <= columns; col++) {
        const isGood = statuses[number - 1];
        rowUnits.push(
          <PlantUnit
            key={`${row}-${col}`}
            number={number}
            isGood={isGood}
            onPress={this.handlePlantClick}
          />
        );
        number++;
      }
      grid.push(
        <View key={row} style={gridStyles.row}>
          {rowUnits}
        </View>
      );
    }

    return (
      <View style={gridStyles.container}>
        {grid}
        {selectedPlant !== null && (
          <PlantDetail
            index={selectedPlant}
            {...this.getPlantStatusMessage(
              statuses[selectedPlant - 1],
              selectedPlant,
              errorMesseges
            )}
            onDoneButtonClick={this.handleDoneButtonClick}
          />
        )}
      </View>
    );
  }
}

const gridStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
});
