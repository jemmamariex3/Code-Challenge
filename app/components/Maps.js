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
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 42.882004,
                        longitude: 74.582748,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    showsUserLocation={true}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    map:{
        position:"absolute",
        top:0,
        left:0,
        right:0,
        bottom:0,
    }
});
