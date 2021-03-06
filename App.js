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
  TouchableOpacity,
} from 'react-native';

import {data} from './src/data';
import {bold} from 'colorette';
const App = () => {
  const [pesquisa, setPesquisa] = useState('');

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.baseTitulo}>
          <Text style={styles.titulo}>Explore</Text>
        </View>
        <View style={styles.baseInputTexto}>
          <View style={styles.baseInputTexto1}>
            <TextInput
              style={styles.inputTexto}
              value={pesquisa}
              onChangeText={e => setPesquisa(e)}
              placeholder={'Search'}
            />
          </View>
        </View>
        <View style={styles.baseDescricao}>
          <Text style={styles.baseDescricaoTitulo}>
            Best places o live & works
          </Text>
        </View>
        <View style={styles.container}>
          <View style={styles.foto}>
            {data
              .filter(
                r => r.name.toLowerCase().indexOf(pesquisa.toLowerCase()) != -1,
              )
              .map(image => {
                return (
                  <TouchableOpacity style={styles.baseFoto}>
                    <ImageBackground
                      source={image.src}
                      style={styles.backgroundImage}
                      imageStyle={{borderRadius: 10}}>
                      <Text style={styles.imageTitulo}>{image.name}</Text>
                    </ImageBackground>
                  </TouchableOpacity>
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
    paddingLeft: 13,
    paddingRight: 20,
    paddingBottom: 3,
    paddingTop: 15,
  },
  titulo: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  baseInputTexto: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    paddingRight: 14,
  },

  baseInputTexto1: {
    backgroundColor: '#d4d7dd',
    borderRadius: 8,
    paddingLeft: 6,
    paddingTop: 4,
    paddingBottom: 4,
  },
  inputTexto: {
    color: '#344',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 0,
    paddingBottom: 0,
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
    height: 150,
    //Its for IOS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,

    // its for android
    elevation: 5,
    position: 'relative',
    borderRadius: 10,
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 10,
  },

  baseDescricao: {
    flexDirection: 'column',
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  baseDescricaoTitulo: {
    color: '#344',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageTitulo: {
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.7)',
  },
});

export default App;
