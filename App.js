import React from 'react';
import { StyleSheet, View } from 'react-native';
import BgChange from './components/BgChange';
export default function App() {
  return (
    <View style={Styles.container}>
    <BgChange />
    </View>
    );
}
const Styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
