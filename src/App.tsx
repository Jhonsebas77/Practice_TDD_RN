import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class App extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      reservation: 'ABC-DEF-GHJ'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.idReserve} testID={'reserveCode'} >{this.state.reservation}</Text>
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