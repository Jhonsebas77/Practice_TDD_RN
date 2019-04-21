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
      <View style={styles.background}>
        <View style={styles.containerReservationStatus}>
          <Text style={styles.title} testID={'titleReservationStatus'} >{'¡Casi listo! \n Estamos procesando tu pago'}</Text>
        </View>
        <View style={styles.containerReservationCode}>
          <Text style={styles.textReserve} testID={'subtitleReservationCode'} >{'Tu codigo de reserva Bayou es'}</Text>
          <Text style={styles.idReserve} testID={'reserveCode'} >{this.state.reservation}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  containerReservationCode: {
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#ffffff',
    height: 72
  },
  containerReservationStatus: {
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#ffffff',
    height: 228
  },
  idReserve: {
    fontFamily: 'Cochin',
    fontSize: 22,
    lineHeight: 24,
    textAlign: 'center',
    color: 'rgb(23,158,164)',
    paddingTop: 6
  },
  textReserve: {
    fontFamily: 'Cochin',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center'
  },
  title: {
    fontFamily: 'Cochin',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0,
    color: 'gray'
  }
})