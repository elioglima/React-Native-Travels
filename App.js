/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';

import {data} from './src/data';
import {bold} from 'colorette';
const App = () => {
  const [pesquisa, setPesquisa] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.baseTitulo}>
        <Text style={styles.titulo}>Explore</Text>
      </View>
      <View style={styles.baseInputTexto}>
        <TextInput
          style={styles.inputTexto}
          value={pesquisa}
          onChangeText={e => setPesquisa(e)}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.foto}>
            {data
              .filter(
                r => r.name.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1,
              )
              .map(image => {
                return (
                  <View style={styles.baseFoto}>
                    <ImageBackground
                      source={image.src}
                      style={styles.backgroundImage}
                      imageStyle={{borderRadius: 10}}>
                      <Text style={styles.titulo}>{image.name}</Text>
                    </ImageBackground>
                  </View>
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
  baseTitulo: {
    flexDirection: 'column',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  titulo: {
    color: '#344',
    fontSize: 20,
    fontWeight: 'bold',
  },

  baseInputTexto: {
    paddingHorizontal: 15,
    paddingBottom: 5,
  },
  inputTexto: {
    backgroundColor: '#d4d7dd',
    color: '#344',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 8,
    paddingLeft: 6,
    paddingTop: 4,
    paddingBottom: 4,
  },
  foto: {
    flex: 1,
  },
  baseFoto: {
    alignSelf: 'stretch',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  backgroundImage: {
    alignSelf: 'stretch',
    height: 100,
    //Its for IOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,

    // its for android
    elevation: 5,
    position: 'relative',
    borderRadius: 10,
  },
});

export default App;
