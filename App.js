import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import HomePage from "./assets/pages/HomePage";
import StatsPage from "./assets/pages/StatsPage";
import MonitorPage from "./assets/pages/MonitorPage";
import { useState } from 'react';
const Stack = createStackNavigator();
export default function App() {

  const [statusValues, setStatusValues] = useState({
    Temp: 30,
    Light: 500,
    Humidity: 60,
    Moisture: 50,
    pH: 4,
    CO2: 60,
  });

  const statuses = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
  ];
  const errorMesseges = {
    16: "Affected with disease 2",
    32: "Affected with disease 1"
  };

  return (
        <NavigationContainer theme={{ colors: { background: '#0d2812' } }}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ headerShown: false }} 
            />
            <Stack.Screen
              name="MonitorPage"
              options={{ headerShown: false }} 
          >
             {() => <MonitorPage statusValues={statusValues} setStatusValues={setStatusValues} />}
            </Stack.Screen>
            <Stack.Screen
              name="StatsPage"
              options={{ headerShown: false }} 
          >
          {() => <StatsPage crop="Wheat" health="Good" growthProgress={"50%"} statuses={statuses} errorMesseges={errorMesseges} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>

  );
}
