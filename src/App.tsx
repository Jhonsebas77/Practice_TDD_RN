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
          <Text style={styles.titleReserveCode} testID={'titleReservationStatus'} >{'¡Casi listo! \n Estamos procesando tu pago'}</Text>
          <Text style={styles.subTitleReserveCode} testID={'subTitleReservationStatus'} >
            {'Tu reserva está pendiente, te contactaremos \n por email en las próximas 24hs. \nRecordá chequear tu carpeta de spam.'}
          </Text>
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
    fontFamily: 'arial',
    fontSize: 22,
    lineHeight: 24,
    textAlign: 'center',
    color: 'rgb(23,158,164)',
    paddingTop: 6
  },
  textReserve: {
    fontFamily: 'arial',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center'
  },
  subTitleReserveCode: {
    fontFamily: 'arial',
    fontSize: 16,
    paddingTop: 7,
    lineHeight: 20,
    paddingLeft: 20,
    letterSpacing: 0,
    color: 'gray',
    textAlign: 'center'
  },
  titleReserveCode: {
    fontFamily: 'arial',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0,
    color: 'black'
  }
})