import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Thank from './Containers/Checkout/ThankYou/content'

export default class App extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Thank />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  }
})