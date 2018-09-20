import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BarraTitulo extends Component {
  render() {
    return (      
      <View style={styles.container}>      
       	<Text style={styles.txtTitulo}> Cara ou Coroa </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCC',
    padding: 15
  },
  txtTitulo: {
  	fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
