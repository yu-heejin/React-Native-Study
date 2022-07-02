import React, {useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import Geolocation from 'react-native-geolocation-service'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';	
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ViewContainer = styled.View`
  flex: 1;
  justifyContent: center;
  aliginItems: center;
  backgroundColor: #709eff;
`

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 10,
    margin: 8,
  }

})
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
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  })

    return (
      <>
      <ViewContainer>
        <Text>현재 위치 안내</Text>
          <MapView 
            style={{ 
              width: '80%', 
              height: '40%',
              position: 'absolute',
              marginLeft: 43,
             }} 
            provider={PROVIDER_GOOGLE}
            initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }} 
          />
          <TouchableOpacity style={styles.button}>
            <Text>긴급상황 발생! 인근 파출소 혹은 가족에게 신고하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>안심 귀가 서비스 이용하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>주요 연락처 등록하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>실시간 위험 지역 / 치안 시설 정보 확인하기</Text>
          </TouchableOpacity>
        </ViewContainer>
      </>
    );
};

export default MapExample;
