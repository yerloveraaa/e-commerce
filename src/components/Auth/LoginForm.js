import React, { useState } from 'react'
import { View, Text, Alert } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import { loginApi } from '../../api/user';
import useAuth from '../../hooks/useAuth'
import { formStyles } from '../../styles'
import Toast from 'react-native-root-toast';


export default function LoginForm(props) {
  const { changeForm } = props;
  const [loading, setLoading] = useState(false)
  const { login } = useAuth();


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      try {
        const response = await loginApi(formData);
        if(response.statusCode) throw "Error intentalo de nuevo"
       login(response)
      } catch (error) {
          Toast.show( error, {
            position: Toast.positions.CENTER
          })
        
        console.log(error)


      }
      setLoading(false);
    },
  });


  return (
    <View>


      <TextInput label="Email o Username "
        style={formStyles.input}
        value={formik.values.identifier}
        error={formik.errors.identifier}
        onChangeText={(text) => formik.setFieldValue('identifier', text)}
      />
      <TextInput label="Contrasena "
        style={formStyles.input}
        onChangeText={(text) => formik.setFieldValue('password', text)}
        secureTextEntry
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button mode="contained"
        onPress={formik.handleSubmit}
        loading={loading}
        style={formStyles.btnText}>Entrar</Button>
      <Button mode="text"
        style={formStyles.btnText}
        labelStyle={formStyles.btnTextLabel}
        onPress={changeForm}
      >Registrarse</Button>
    </View>
  )
}


function initialValues() {
  return {
    identifier: '',
    password: ''
  }
}

function validationSchema() {
  return {
    identifier: Yup.string().required(true),
    password: Yup.string().required(true)
  }
}