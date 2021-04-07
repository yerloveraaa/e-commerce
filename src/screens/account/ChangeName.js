import React, { useCallback, useState, useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useFormik } from 'formik';
import * as Yup from "yup"
import Toast from 'react-native-root-toast';
import { useFocusEffect, useNavigation } from '@react-navigation/native'


import useAuth from '../../hooks/useAuth';
import { getMeApi, updateUserApi } from '../../api/user'


import { formStyles } from '../../styles'




export default function ChangeName() {
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation()

    const { auth } = useAuth();

    //         useFocusEffect(
    //         useCallback( () =>{
    //             (async() => {
    //             const response = await  getMeApi(auth.token);
    //             if(response.name && response.lastname){

    //                 await formik.setFieldValue("name", response.name)
    //                 await formik.setFieldValue("lastname", response.lastname)
    //             }

    //             })();
    //         })
    // );
    useLayoutEffect(() => {
        (async () => {
            const response = await getMeApi(auth.token);
            if (response.name && response.lastname) {

                await formik.setFieldValue("name", response.name)
                await formik.setFieldValue("lastname", response.lastname)
            }

        })();

    }, [])

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
          setLoading(true)
          try {
            await updateUserApi(auth, formData)
            navigation.goBack();
          } catch (error) {
             Toast.show("Error al actulizar los datos", {
                 position: Toast.positions.CENTER,
             }) 
              setLoading(false)
          }
        }
    })


    return (
        <View style={styles.container}>
            <TextInput
                label="Nombre"
                style={formStyles.input}
                onChangeText={(text) => formik.setFieldValue("name", text)}
                value={formik.values.name}
                error={formik.errors.name}
            />
            <TextInput
                label="Apellidos"
                style={formStyles.input}
                onChangeText={(text) => formik.setFieldValue('lastname', text)}
                value={formik.values.lastname}
                error={formik.errors.lastname}
            />

            <Button
                mode="contained"
                style={formStyles.btnSucces}
                onPress={formik.handleSubmit}
                loading={loading}

            >
                Cambiar nombre y apellido
            </Button>


        </View>
    )
}

function initialValues() {
    return {
        name: "",
        lastname: ''
    }
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        lastname: Yup.string().required(true)
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})