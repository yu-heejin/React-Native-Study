import React from 'react';
import {
    Pressable,
    StyleSheet,
    TextInput,
    useWindowDimensions,
    View
} from 'react-native';

function SearchBar2() {
    const {width} = useWindowDimensions();
    return (
        <View style={[styles.block, {width: '50%'}, {height: '70%'}]}>
            <TextInput style={styles.input} placeholder="도착지를 입력하세요." autoFocus/>
            <Pressable
                style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}>
            </Pressable>
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