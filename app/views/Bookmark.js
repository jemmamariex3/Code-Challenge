import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image} from 'react-native';
import iPhoneSize from "../helper/utiils";
import {Forecast} from "../components/Forecast";

const width = iPhoneSize();
export class Bookmark extends Component{
    constructor(props){
        super(props);
        // alert(iPhoneSize());
    }
    render(){
        return(
            <SafeAreaView contentContainerStyle={styles.container}>
                <View style={styles.imageContainer}>
                    <Forecast/>
                    <Text>
                        This trip is empty
                    </Text>
                    <Text>
                        Click the blue plus to pin a place
                    </Text>
                    <Image style={styles.tripBg} source={require('../assets/tripBackground.png')}/>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    },
    imageContainer: {
        justifyContent:'space-between',
        alignItems:'center',
        width: width,
        height:'100%',
    },
    tripBg:{
        width: '100%',
    }
});
