import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View, TouchableHighlight } from 'react-native'

export default class App extends Component<any, any> {
  constructor(props) {
    super(props)
    this.state = {
      length: 0,
      width: 0
    }
    this.onUpdateLength = this.onUpdateLength.bind(this)
    this.onUpdateWidth = this.onUpdateWidth.bind(this)
    this.onUpdateArea = this.onUpdateArea.bind(this)
  }

  onUpdateLength(length) {
    this.setState({ length })
  }

  onUpdateWidth(width) {
    this.setState({ width })
  }

  onUpdateArea() {
    const area = this.state.length * this.state.width
    this.setState({ area })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text testID={'rectangleLengthText'} style={styles.label}>Length</Text>
        <TextInput testID={'rectangleLengthInput'} onChangeText={this.onUpdateLength} />
        <Text testID={'rectangleWidthText'} style={styles.label}>Width</Text>
        <TextInput testID={'rectangleWidthInput'} onChangeText={this.onUpdateWidth} />
        <TouchableHighlight testID={'rectangleAreaButton'} style={styles.button} onPress={this.onUpdateArea}>
          <Text style={styles.textButton}>Calculate</Text>
        </TouchableHighlight>
        <Text testID={'rectangleAreaResult'}>{this.state.area}</Text>
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