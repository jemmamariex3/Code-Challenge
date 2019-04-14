/// this contains a helper method that determines the size of the iphone
import React from 'react';
import {Dimensions} from 'react-native'
const iPhoneSize = () =>{
    const windowWidth = Dimensions.get('window').width;
    // if(windowWidth === 320){
    //     return 'small ' +windowWidth; //iPhone SE
    // }else if(windowWidth === 414){
    //     return 'large ' +windowWidth;// iphone plus
    // }
    // return 'medium ' +windowWidth //iphone6/7
    return windowWidth;
}

export default iPhoneSize;
