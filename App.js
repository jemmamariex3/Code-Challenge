/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Main} from "./app/views/Main";

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
        <Main/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

});
