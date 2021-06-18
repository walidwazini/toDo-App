import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text,TextInput,
  Button,TouchableOpacity, View } from 'react-native';

export default function Detail({navigation}) {
  const [name,setName] = useState('')

  return (
    <View style={styles.container}>
      <Text>Detail Page</Text>
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
});
