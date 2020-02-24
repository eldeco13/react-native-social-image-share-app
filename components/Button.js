import React from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function Button({text, press}) {
   return (
    <TouchableOpacity
        onPress={press} style={styles.button} >
        <Text style={styles.buttonText}>
            {text}
        </Text>
    </TouchableOpacity>
   ) 
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "pink",
        padding: 20,
        borderRadius: 5,
      },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
})