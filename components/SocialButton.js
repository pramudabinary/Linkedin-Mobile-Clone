import React from 'react'
import { StyleSheet,View, Text,TouchableOpacity } from 'react-native'

const Socialbutton = ({onPress,text}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{ text }</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:20,
        borderWidth: 1,
        borderColor:'black',
        borderRadius:20,
        paddingVertical:14,
        paddingHorizontal:10,
    },
    buttonText:{
        color:'black',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center'
    }
})

export default Socialbutton
