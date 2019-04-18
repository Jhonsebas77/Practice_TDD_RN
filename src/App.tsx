import React, { Component } from 'react'
import { StatusBar, View, Text } from 'react-native'
console.disableYellowBox = true
console.error = (error: any) => error.apply

export default class App extends Component {
  constructor(props: any) {
    super(props)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          translucent={true}
          backgroundColor='rgba(0, 0, 0, 0.2)'
          barStyle='dark-content' />
        <Text style={{ paddingTop: 20 }}>{'Hola Mundo'}</Text>
      </View>
    )
  }
}