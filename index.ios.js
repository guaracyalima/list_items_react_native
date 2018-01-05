import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListaItems from './src/components/ListaItems'

export default class app4 extends Component {

  // ciclo de vida do componente
  // constructor(props){
  //   super(props)
  //   console.log('constructor');
  // }
  //
  // componentWillMount(){
  //   console.log('willmoint');
  // }
  //
  // componentDidMount(){
  //   console.log('did mount');
  // }

  render() {
    return (
      <ListaItems></ListaItems>
    );
  }
}

AppRegistry.registerComponent('app4', () => app4);
