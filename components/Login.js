import React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

const Login = (props) => {
    return (
        <View>
            <TextInput value={props.placeName} onChangeText={props.placeNameChangeHandler}/>
        </View>
    )
}

export default Login 