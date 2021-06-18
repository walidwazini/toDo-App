import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

export default function AddItem({navigation}) {
  const [name,setName] = useState('')

  return (
    <View style={styles.container}>
      <Text>Add your item here</Text>
      <TextInput 
        value={name}
        style={styles.inputStyle}
        onChangeText={(text) => setName(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    borderColor: "lightpurple",
    borderWidth: 0.87,
    padding: 10,
    margin: 10,
    width: 300,
},
});
