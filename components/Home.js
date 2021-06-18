import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, FlatList, TouchableOpacity,
  ScrollView, Button, SafeAreaView
} from 'react-native';

import { Ubuntu_700Bold, Ubuntu_400Regular, Ubuntu_500Medium_Italic,
  Ubuntu_300Light, useFonts } from '@expo-google-fonts/ubuntu';
import { AppLoading } from 'expo'

export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_300Light,
    Ubuntu_400Regular,
    Ubuntu_500Medium_Italic,
  })

  const [comments, setComments] = useState([
    {
      'id': 1,
      'Name': 'Danny',
      'Rating': 3,
      'Review': "The class is "
    },
    {
      'id': 2,
      'Name': 'Suzy',
      'Rating': 4,
      'Review': "I love how the presenter presents the topic."
    }
  ])


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} >Welcome to the MyList</Text>
      <View>
        <FlatList
          data={comments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.push('ExtraDetails',
              { 'item': item }
            )}>
              <View style={styles.item}>
                <Text style={styles.itemTitle} >{item.Name}</Text>
                <Text>{item.Review}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.button} >
        <Button
          onPress={() => navigation.push('AddItem')} title="Add Your Item" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: "Ubuntu_700Bold"
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  itemTitle: {
    fontFamily: 'Ubuntu_500Medium_Italic',
  },
  button: {
    padding: 20,
    margin: 20,
    color: 'tomato',
  }
});
