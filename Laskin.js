
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default function Laskin({ navigation }) {

const [text, setText] = useState("");
const [text2, setText2] = useState("");
const [result, setResult] = useState("");
const [list, setList] = useState([]);

const buttonPressed1 = () => {
 const res = parseFloat(text) + parseFloat(text2);
setResult(res);
 const row = `${text} + ${text2} = ${res}`;
setList([...list, {key: row}]);
setText("");
setText2("");

};

const buttonPressed2 = () => {

  const res = parseFloat(text) - parseFloat(text2);
  setResult(res);
  const row = `${text} - ${text2} = ${res}`;
setList([...list, {key: row}]);
setText("");
setText2("");
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
    <Button onPress={() => navigation.navigate('Historia', { history: list })} 
    
    title="History" />
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