import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native'

export default class App extends Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <Text testID={'rectangleLengthText'} style={styles.label}>Length</Text>
        <TextInput testID={'rectangleLengthInput'} />
        <Text testID={'rectangleWidthText'} style={styles.label}>Width</Text>
        <TextInput testID={'rectangleWidthInput'} />

        <TouchableHighlight testID={'rectangleAreaButton'} style={styles.button}>
          <Text style={styles.textButton}>Calculate</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  button: {
    backgroundColor: '#414f6f',
    borderRadius: 10,
    marginTop: 20,
    padding: 15
  },
  textButton: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#ffffff'
  },
  label: {
    fontSize: 17
  }
})