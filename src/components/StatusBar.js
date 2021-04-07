import React from 'react'
import { StatusBar, SafeAreaView } from 'react-native'

export default function StatusBarCustomer(props) {

    const {backgroundColor, ...rest} = props;
    console.log(props)
    return (
        <>
       <StatusBar  backgroundColor={backgroundColor} {...rest} />
        <SafeAreaView 
        style={{
            flex: 0,
            backgroundColor: backgroundColor,
        }}
        />
        </>
    )
}
