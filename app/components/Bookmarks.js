import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import iPhoneSize from "../helper/utiils";

const width = iPhoneSize();
export class Bookmarks extends Component{
    constructor(props){
        super(props);
        // alert(iPhoneSize());
    }
    render(){
        return(
            <SafeAreaView contentContainerStyle={styles.container}>
                <Text>
                    This trip is empty
                </Text>
                <Text>
                    Click the blue plus to pin a place
                </Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    }
});
