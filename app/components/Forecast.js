import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text, Image, Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import iPhoneSize from "../utils/utils";
import {Search} from "./Search";

import {API_KEY} from '../utils/WeatherAPIKey';
const width = iPhoneSize();

export class Forecast extends Component{
    constructor(props){
        super(props);
        // alert(iPhoneSize());
        this.state = {
            temperature: 0,
            weatherCondition: null,
            error: null
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeather(position.coords.latitude, position.coords.longitude);
            },
            error => {
                this.setState({
                    error: 'Error Getting Weather Conditions'
                });
            }
        );
    }

    fetchWeather(lat = 0, lon = 0) {
        fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`
        )
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({
                    temperature: json.main.temp,
                    weatherCondition: json.weather[0].description,
                });
            });
    }

    render(){
        return(
            <SafeAreaView contentContainerStyle={styles.container}>
                <ImageBackground style={styles.imageContainer} source={require('../assets/weatherHeader.png')}>
                    <View style={styles.weatherContainer}>
                        <Text style={[styles.text, styles.title]}>Good Morning!</Text>
                        <Text style={[styles.text, styles.subtitle]}>Today is {this.state.temperature}˚ and {this.state.weatherCondition} </Text>
                    </View>
                    <Search/>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        width: width,
        height: 145,
    },
    tripBg:{
        width: '100%',
    },
    addBtn:{
        width: 60,
        height: 60,
        margin: 15
    },
    weatherContainer:{
        flexDirection: 'column',
        margin: 20

    },
    title:{
        fontFamily: 'Arial',
        fontSize: 30,
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
