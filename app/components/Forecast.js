import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import iPhoneSize from "../helper/utiils";

const width = iPhoneSize();
export class Forecast extends Component{
    constructor(props){
        super(props);
        // alert(iPhoneSize());
    }
    render(){
        return(
            <SafeAreaView contentContainerStyle={styles.container}>
                <ImageBackground style={styles.imageContainer} source={require('../assets/weatherHeader.png')}>
                    <TouchableOpacity>
                        <Image style={styles.addBtn} source={require('../assets/addBookmarkButton.png')}/>
                    </TouchableOpacity>
                </ImageBackground>
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
