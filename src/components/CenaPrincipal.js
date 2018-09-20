import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const imgLogo = require('../imgs/logo.png');
const imgBtnJogar = require('../imgs/botao_jogar.png');
const imgBtnOutrosJogos = require('../imgs/outros_jogos.png');
const imgBtnSobreJogo = require('../imgs/sobre_jogo.png');

export default class CenaPrincipal extends Component {
  render() {
    return (  
    <View style={styles.cenaPrincipal}>

        <View style={styles.apresentacaoJogo}>
          <Image source={imgLogo} />

          <TouchableHighlight
            onPress={() => { Actions.resultado() }}
          >
            <Image source={imgBtnJogar} />
          </TouchableHighlight>
          
        </View>

        <View style={styles.rodape}>
          <TouchableHighlight
            onPress={() => { Actions.sobreJogo() }} 
          > 
            <Image source={imgBtnSobreJogo} />
          </TouchableHighlight>  

          <TouchableHighlight
            onPress={() => { Actions.outrosJogos() }} 
          > 
            <Image source={imgBtnOutrosJogos} />
          </TouchableHighlight> 
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
