import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import iPhoneSize from "../utils/utiils";
import {Search} from "./Search";

const width = iPhoneSize();
export class Maps extends Component{
    constructor(props){
        super(props);
        // alert(iPhoneSize());
    }
    render(){
        return(
            <SafeAreaView contentContainerStyle={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{flex: 1}}
                    region={{
                        latitude: 42.882004,
                        longitude: 74.582748,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    showsUserLocation={true}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    },
    imageContainer: {
        alignItems:'flex-end',
        justifyContent:'flex-end',
        width: width,
        height: 145,
    },
    tripBg:{
        width: '100%',
    },
    addBtn:{
        width: 60,
        height: 60,
        margin: 20
    }
});
