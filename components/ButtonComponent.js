import React from 'react'
import { StyleSheet,View, Text,TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonComponent = ({text,onPress}) => {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button:{
        borderRadius:20,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#0984e3'
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        textTransform:'uppercase',
        fontSize:16,
        textAlign:'center'
    }


})

export default ButtonComponent
