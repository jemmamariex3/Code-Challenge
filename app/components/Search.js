import React, {Component} from 'react';
import {StyleSheet, SafeAreaView,Text, Image, TouchableOpacity,ScrollView, Button, Modal, View} from 'react-native';

import iPhoneSize from "../utils/utiils";
import {Maps} from "./Maps";

const width = iPhoneSize();
export class Search extends Component{

    state = {
        isModalVisible: false
    };

    openModal() {
        this.setState({isModalVisible:true});
    }

    closeModal() {
        this.setState({isModalVisible:false});
    }

    render(){
        return(
            <SafeAreaView contentContainerStyle={styles.container}>
                <TouchableOpacity onPress={() => this.openModal()}>
                    <Image style={styles.addBtn} source={require('../assets/addBookmarkButton.png')}/>
                </TouchableOpacity>

                <Modal
                    visible={this.state.isModalVisible}
                    animationType={'slide'}
                    onRequestClose={() => this.closeModal()}
                    transparent={true}
                >
                    <View style={styles.searchContainer}>
                        <View style={styles.innerContainer}>
                            <Maps/>
                            <Button
                                onPress={() => this.closeModal()}
                                title="Close modal"
                            >
                            </Button>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
    },
    searchContainer:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        borderColor: "#C0C0C0",
        borderRadius: 18,
        borderWidth: 2,
    },
    innerContainer: {
        alignItems: 'center',
    },
    addBtn:{
        width: 60,
        height: 60,
        margin: 20
    }
});
