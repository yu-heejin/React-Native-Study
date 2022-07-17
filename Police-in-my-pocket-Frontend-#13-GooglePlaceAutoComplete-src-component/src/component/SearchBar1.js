import React, { useEffect, useRef } from 'react';
import {
    Pressable,
    StyleSheet,
    TextInput,
    useWindowDimensions,
    View,
    Text
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function SearchBar1() {
    const ref = useRef();
    useEffect(() => {
        ref.current?.setAddressText('');
    }, []);

    return (
        <View style={[styles.block, {width: '42%'}, {height: '70%'}, {marginEnd:'6%'}]}>
            <GooglePlacesAutocomplete
                placeholder='Search'
                ref={ref}
                autoFocus={false}
                nearbyPlacesAPI='GooglePlacesSearch'
                onPress={(data, details = null) => {  //해당 결과 클릭 시 콘솔에 출력
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                listViewDisplayed='auto'
                query={{
                    key: 'AIzaSyAx0vC5rUuV7PT72y03BDwK79Yu2ByP3Hw',
                    language: 'ko',
                }}
                renderDescription={(data) => console.log(data.description)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 10
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: '80%',
        fontFamily: 'GmarketSansTTFMedium',
    },
    button: {
        //marginRight: 8,
    },
});

export default  SearchBar1;