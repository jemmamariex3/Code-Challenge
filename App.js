/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Bookmark} from "./app/views/Bookmark";

export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
        <Bookmark/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

});
