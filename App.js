/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {data} from './src/data';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titulo}>Explore</Text>
          <View style={styles.foto}>
            {data.map(reg => {
              return (
                <ImageBackground
                  source={reg.src}
                  style={styles.backgroundImage}>
                  <Text style={styles.titulo}>{reg.name}</Text>
                </ImageBackground>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  titulo: {
    flex: 1,
    color: '#344',
    flexDirection: 'column',
  },
  foto: {
    flex: 1,
  },
  backgroundImage: {
    alignSelf: 'stretch',
    height: 100,
  },
});

export default App;
