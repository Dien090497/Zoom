import React from "react";
import { NavigationContainer, DefaultTheme  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import MeetingRoom from "../screens/MeetingRoom";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'}
                      component={Home}
                      options={{
                        headerShown: false
                      }} />
        <Stack.Screen name={'MeetingRoom'}
                      options={{
                        title: 'Start a Meeting',
                        headerStyle:{
                          backgroundColor: 'black'
                        },
                        headerTitleAlign: 'center',
                        headerTintColor: 'white'
                      }}
                      component={MeetingRoom} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

