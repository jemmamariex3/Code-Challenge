import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import iPhoneSize from "../helper/utiils";
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
                <Text>
                    MAPS
                </Text>
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
