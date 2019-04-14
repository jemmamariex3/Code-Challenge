import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import iPhoneSize from "../helper/utiils";
import {Forecast} from "../components/Forecast";
import {Bookmarks} from "../components/Bookmarks";

const width = iPhoneSize();
export class Main extends Component{
    constructor(props){
        super(props);
        // alert(iPhoneSize());
    }
    render(){
        return(
            <SafeAreaView contentContainerStyle={styles.container}>
                <View style={styles.mainContainer}>
                    <Forecast/>
                    <Bookmarks/>
                    <ImageBackground style={styles.tripBg} source={require('../assets/tripBackground.png')}>
                        <Text style={styles.text}>
                            Exploring Louisville BBQ
                        </Text>
                        <Text style={styles.text}>
                            Louisville, Kentucky
                        </Text>
                    </ImageBackground>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    },
    mainContainer: {
        justifyContent:'space-between',
        alignItems:'center',
        width: width,
        height:'100%',
    },
    tripBg:{
        width: width,
        height: 376,
        justifyContent: 'flex-end',
    },
    text:{
        color:"#ffffff"
    }
});
