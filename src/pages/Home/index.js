import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import {data} from '../../data';

export default ({navigation}) => {
  const [pesquisa, setPesquisa] = useState('');
  const ref = useRef();
  const {navigate} = navigation;

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.baseTitulo}>
          <Text style={styles.titulo}>Explore</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 10,
            paddingRight: 15,
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              ref.current.focus();
            }}>
            <View
              style={{
                backgroundColor: '#d4d7dd',
                paddingHorizontal: 8,
                borderTopLeftRadius: 7,
                borderBottomLeftRadius: 7,
                flexDirection: 'row',
                alignItems: 'center',
                flexGrow: 1,
              }}>
              <Icon
                name="search"
                size={17}
                color="#999"
                style={{paddingRight: 5}}
              />
              <TextInput
                onChangeText={text => setPesquisa(text)}
                placeholder="Search"
                style={{fontSize: 15, paddingTop: 2, paddingBottom: 2}}
                ref={ref}
                value={pesquisa}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableOpacity
            onPress={() => {
              setPesquisa('');
            }}>
            <View
              style={{
                backgroundColor: '#d4d7dd',
                paddingLeft: 15,
                paddingRight: 10,
                paddingVertical: 12,
                borderTopRightRadius: 7,
                borderBottomRightRadius: 7,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name="window-close"
                size={18}
                color="#999"
                style={{paddingRight: 5}}
              />
            </View>
          </TouchableOpacity>
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
                  <TouchableOpacity
                    style={styles.baseFoto}
                    onPress={() => navigate('Details', {selected: image})}>
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
    justifyContent: 'space-between',
  },

  baseInputTextoIcone: {
    backgroundColor: '#d4d7dd',
    borderRadius: 8,
    paddingLeft: 6,
    paddingTop: 4,
    paddingBottom: 4,
  },

  baseInputTexto1: {
    flexDirection: 'row',
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
    paddingLeft: 13,
    paddingRight: 16,
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
