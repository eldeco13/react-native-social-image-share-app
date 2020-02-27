import React,{useState, useEffect} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default function Button({text, press}) {
    const [buttonText, setButtonText] = useState('visi')

    useEffect(() => {
        // <Text style={styles.instructions}>
        //     The button has text {buttonText}
        // </Text>
        alert('useEffect here : ' + buttonText )
        return () => {
            setButtonText('visush')
        };
    })

   return (
       <>
    <TouchableOpacity
        onPress={() => setButtonText('hmm')} style={styles.button} >
        <Text style={styles.buttonText}>
            {text}
        </Text>
    </TouchableOpacity>

        <TouchableOpacity
            onPress={() => alert(buttonText)} style={styles.button} >
                <Text style={styles.buttonText}>
                    {buttonText}
                </Text>
        </TouchableOpacity>
        </>
   ) 
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "pink",
        padding: 20,
        borderRadius: 5,
      },
      instructions: {
        color: 'red',
        fontSize: 25,
        marginHorizontal: 15,
      },
        buttonText: {
            fontSize: 20,
            color: '#fff'
        },
})