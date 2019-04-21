import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class App extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.idReserve} testID={'reserveCode'} >{'ABC-DEF-GHJ'}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  idReserve: {
    fontFamily: 'Cochin',
    fontSize: 22,
    lineHeight: 24,
    textAlign: 'center',
    color: 'rgb(23,158,164)',
    paddingTop: 6
  }
})