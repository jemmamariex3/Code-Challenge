import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image, Dimensions, ImageBackground, TouchableOpacity, ListView, List} from 'react-native';
import iPhoneSize from "../utils/utils";

const width = iPhoneSize();
export class Bookmarks extends Component{
    constructor(props){
        super(props);
        // alert(iPhoneSize());
    }
    render(){
        return(
            <SafeAreaView contentContainerStyle={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, styles.title]}>
                        This trip is empty
                    </Text>
                    <Text style={[styles.text, styles.subtitle]}>
                        Click the blue plus to pin a place
                    </Text>
                    {/*<List>*/}
                        {/*<ListItem>*/}
                            {/*<Text> Placeholder here</Text>*/}
                        {/*</ListItem>*/}
                        {/*<ListItem>*/}
                            {/*<Text> Placeholder2 here</Text>*/}
                        {/*</ListItem>*/}
                    {/*</List>*/}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    },
    text:{
        color:"#808080",
    },
    title:{
        fontFamily: 'Arial',
        fontSize: 18,
        textAlign:'center',
    },
    subtitle:{
        fontSize: 13,
    },
    textContainer:{
        lineHeight: 21,
        margin: 20
    }

});
