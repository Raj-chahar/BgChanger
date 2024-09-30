import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
export default function BgChange() {
    const [backGround, setBackground] = useState('#FFFFFF');
    const generateBg = () => {
        const colorCode = '0123456789ABCDEF';
        let color = '#';
        for (let i = 1; i <= 6; i++) {
            color += colorCode[Math.floor(Math.random() * 16)];
        }
        setBackground(color);
    };
  return (
    <>
    <StatusBar backgroundColor={backGround}/>
      <TouchableOpacity onPress={generateBg}>
        <View style={[styles.button, {backgroundColor: backGround}]}>
          <Text style={styles.actionBtnTxt}>CHANGE</Text>
        </View>
      </TouchableOpacity>
    </>
    );
}
const styles = StyleSheet.create({
    button: {
        height: 60,
        width: 150,
        borderRadius: 12,
        backgroundColor: '#6A1B4E',
        justifyContent: 'center',
        alignItems: 'center',
        },
    actionBtnTxt: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
});
