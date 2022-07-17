import React from 'react';
import {
    Pressable,
    StyleSheet,
    TextInput,
    useWindowDimensions,
    View
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

function SearchBar2() {
    const {width} = useWindowDimensions();
    return (
        <View style={[styles.block, {width: '42%'}, {height: '70%'}]}>
            <GooglePlacesAutocomplete
                placeholder='도착지를 입력하세요'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyAx0vC5rUuV7PT72y03BDwK79Yu2ByP3Hw',
                    language: 'en',
                }}
            />  
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
        marginBottom: 10
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 15,
        width: '80%',
        fontFamily: 'GmarketSansTTFMedium',
    },
    button: {
        //marginLeft: 8,
    },
});

export default  SearchBar2;