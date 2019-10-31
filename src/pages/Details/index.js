/**
 * Details Page
 * https://github.com/marcosvaz/travelbook
 *
 * @format
 * @flow
 */

import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const Details = ({navigation}) => {
  const {navigate} = navigation;
  const {selected} = navigation.state.params;

  const [liked, like] = useState(false);

  BackHandler.addEventListener('hardwareBackPress', () => {
    navigate('Home');
    return true;
  });

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <ImageBackground
          style={{flex: 1}}
          source={selected.src}
          key={selected.id}>
          <View
            style={{
              flex: 1,
              marginHorizontal: 10,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <TouchableWithoutFeedback onPress={() => navigate('Home')}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon name="angle-left" size={40} color="white" />
                  <Text style={{marginLeft: 10, fontSize: 20, color: 'white'}}>
                    Back
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                paddingHorizontal: 20,
                paddingVertical: 20,
                marginBottom: 40,
                backgroundColor: 'rgba(0,0,0,0.6)',
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontSize: 26,
                  fontWeight: 'bold',
                  color: 'white',
                  paddingBottom: 15,
                }}>
                {selected.name}
              </Text>
              <Text style={{fontSize: 18, color: 'white', paddingBottom: 20}}>
                {selected.description}
              </Text>
              <View style={{alignItems: 'flex-end'}}>
                <MIcon
                  name="favorite"
                  size={50}
                  color={liked ? '#ed1250' : 'white'}
                  onPress={() => like(!liked)}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default Details;
