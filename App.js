import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Alert, TextInput,FlatList } from "react-native";
import { useState } from "react";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Laskin from './Laskin';
import Historia from './Historia';

const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Laskin" component={Laskin} />
        <Stack.Screen name="Historia" component={Historia} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


