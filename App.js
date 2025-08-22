import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Alert, TextInput } from "react-native";
import { useState } from "react";
import React from 'react';

export default function App() {

const [text, setText] = useState("");
const [text2, setText2] = useState("");
const [result, setResult] = useState("");
const buttonPressed1 = () => {
  
setResult(parseFloat(text) + parseFloat(text2));
};

const buttonPressed2 = () => {
  setResult(parseFloat(text) - parseFloat(text2));

};

  return (
    <View style={{alignItems: 'center', flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      
      <View style={{flex: 2, justifyContent: 'flex-end'}}>
      <Text> Result: {result}</Text>
</View>
<View style={{flex: 1, justifyContent: 'center'}}>
    <TextInput
    style={styles.container}
     keyboardType = 'numeric'
  onChangeText={text => setText(text)} 
  value={text} 
   />

    <TextInput
    style={styles.container}
     keyboardType = 'numeric'
  onChangeText={text2 => setText2(text2)} 
  value={text2} 
   />
</View>

   <View style={{flex: 2, flexDirection: 'row',alignItems: 'flex-start', justifyContent: 'space-between', gap: 10
   }}>
    <Button onPress={buttonPressed1} title="+" />
    <Button onPress={buttonPressed2} title="-" />
  </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250
    
  },
});
