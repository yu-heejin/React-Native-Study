import React, { useEffect, useState } from 'react';
import { View, Button, Alert, StyleSheet,TouchableHighlight, Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service'
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";	
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';

const ViewContainer = styled.View`
  flex: 1;
  justifyContent: center;
  aliginItems: center;
  backgroundColor: #709eff;
`
const MapExample = ({ navigation }) => {
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
          console.log(position);

          const lo = JSON.stringify(position.coords.longitude);
          const la = JSON.stringify(position.coords.latitude);
          setLongitude(lo);
          setLatitude(la);
      },
      (error) => {
          console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  })

    return (
      <>
      <ViewContainer>
          <MapView 
            style={{ 
              width: '80%', 
              height: '60%',
              position: 'absolute',
              marginLeft: 43,
             }} 
            provider={PROVIDER_GOOGLE}
            initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }} 
          />
        </ViewContainer>
        <View>
        <Button title="안심 귀가 서비스 이용하기"
           onPress={() => navigation.navigate('Main')}
         // onPress={() => Alert.alert("현재 위치 : " + longitude + ", " + latitude)}
          color="#000000"></Button>

          <Button title="주요 연락처 등록하기"
          onPress={() => Alert.alert("현재 위치 : " + longitude + ", " + latitude)}
          color="#000000"></Button>
        </View>
      </>
    );
};

export default MapExample;
