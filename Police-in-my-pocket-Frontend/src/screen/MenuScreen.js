import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomText from '../style/GlobalFontStyle';

const ViewContainerMap = styled.View`
  flex: 1.1;
  justifyContent: center;
  backgroundColor: #709eff;
  fontFamily: GmarketSansTTFMedium;
`;

const ViewContainerButton = styled.View`
  flex: 1;
  justifyContent: center;
  alignItem: center;
  backgroundColor: #709eff;
  fontFamily: GmarketSansTTFMedium;
`;

const MarkerCustomFont = styled.Text`
  color: white;
  fontFamily: GmarketSansTTFMedium;
  fontSize: 10;
`

const ButtonCustomFont = styled.Text`
  fontFamily: GmarketSansTTFMedium;
  marginLeft: 3%;
`

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 9,
    margin: 8,
    flexDirection: 'row',
    borderRadius: 10,
    width: '95%',
    marginLeft: '2.7%',
  },
});

async function requestPermission() {
  try {
    if (Platform.OS === "ios") {
      return await Geolocation.requestAuthorization("always");
    }
    // 안드로이드 위치 정보 수집 권한 요청
    if (Platform.OS === "android") {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (e) {
    console.log(e);
  }
}



const MapExample = ({navigation}) => {
  const [location, setLocation] = useState();

  useEffect(() => {
    requestPermission().then(result => {
      console.log({result});

      if(result === "granted") {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation(pos.coords);
          },
          error => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 3600,
            maximumAge: 3600,
          },
        );
      }
    });
  }, []);

  return (
    <>
      <View style={{flexDirection: 'row', backgroundColor: '#709eff', justifyContent: 'space-around'}}>
        <CustomText>실시간 음성인식</CustomText>
        <CustomText>OOO님, 환영합니다.</CustomText>
        <Image source={require('../../assets/imgs/user2.png')}
          style={{
            width: 30,
            height: 30,
            marginLeft: '5%',
            marginTop: 10
        }}></Image>
      </View>
      <ViewContainerMap>
        <View style={{flexDirection: 'row', marginBottom: '1%', alignItems: 'flex-end', }}>
          <Text style={{
            color: 'white',
            marginLeft: '5%',
            fontSize: 17,
            fontFamily: 'GmarketSansTTFMedium',
          }}>현재 위치 안내</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Image source={require('../../assets/imgs/placeholder.png')}
            style={{
              width: 12,
              height: 12,
              marginLeft: '5%',
          }}></Image>
          <MarkerCustomFont>현재 위치</MarkerCustomFont>
          <Image source={require('../../assets/imgs/placeholder_danger.png')}
              style={{
                width: 12,
                height: 12,
          }}></Image>
          <MarkerCustomFont>위험 지역</MarkerCustomFont>
          <Image source={require('../../assets/imgs/placeholder_safe.png')}
              style={{
                width: 12,
                height: 12,
              }}></Image>
          <MarkerCustomFont>치안 시설</MarkerCustomFont>
          </View>
          </View>
          <View style={{
            padding: 0,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            backgroundColor: 'white',
            width: '95%',
            marginLeft: '2.7%'
          }}>
            <MapView
              style={{
                width: '100%',
                height: '87%',
              }}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              }}
            />
          </View>
      </ViewContainerMap>
      <ViewContainerButton>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../../assets/imgs/siren.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 5,
            }}></Image>
          <ButtonCustomFont>긴급상황 발생! 인근 파출소 혹은 가족에게 신고하기</ButtonCustomFont>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Main')}>
          <Image
            source={require('../../assets/imgs/police-car.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 5,
            }}></Image>
          <ButtonCustomFont>안심 귀가 서비스 이용하기</ButtonCustomFont>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../../assets/imgs/open-book.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 5,
            }}></Image>
          <ButtonCustomFont>주요 연락처 등록하기</ButtonCustomFont>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('../../assets/imgs/sign.png')}
            style={{
              width: 30,
              height: 30,
              marginLeft: 5,
            }}></Image>
          <ButtonCustomFont>실시간 위험 지역 / 치안 시설 정보 확인하기</ButtonCustomFont>
        </TouchableOpacity>
      </ViewContainerButton>
      </>
  );
};

export default MapExample;
