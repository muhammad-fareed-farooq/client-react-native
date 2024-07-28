import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { login_service } from '../../service/auth_service'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { save_tokens_constant } from './utilits/constant'
import { useDispatch } from 'react-redux'
import { authAction } from '../../store/slices/authSlice'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation()
  const route = useRoute()

  const dispatch = useDispatch()


  const homenav = async () => {
    const data = { email, password };

    try {
      const res = await login_service(data)

      if (res) {
        const accses_token = res.data.accses_token

        AsyncStorage.setItem(save_tokens_constant, accses_token)
        dispatch(authAction({ auth: true, profile: null }))
      }

      console.log(res.data),
        console.log(data)
      if (res.data) {
        navigation.navigate("bottom-tabs")
        alert("Sucsses")
      }
    } catch (error) {
      console.log({ error })

    }

  }
  const signupnav = () => {
    navigation.navigate('Signup')
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingBottom: 20, backgroundColor: "#ffff" }}>
      <ScrollView>
        <View style={{ backgroundColor: '#ffff', flex: 1 }}>
          <Image resizeMode='cover' style={{ alignItems: "center", height: 250, width: 390 }} source={require("../../aseets/img1.png")} />
          <View style={{ paddingHorizontal: 20, gap: 10, marginTop: 20 }}>
            <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
              Login
            </Text>
            <View style={{ gap: 15 }}>
              <View>
                <Text>
                  Email Address
                </Text>
                <TextInput
                  keyboardType='email-address'
                  value={email}
                  onChangeText={setEmail}
                  style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}
                />
              </View>
              <View>
                <Text>
                  Password
                </Text>
                <TextInput
                  keyboardType='visible-password'
                  value={password}
                  onChangeText={setPassword}
                  style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10 }}
                  secureTextEntry
                />
              </View>

              <View style={{ backgroundColor: "#fff", alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity onPress={homenav} style={{ borderWidth: 2, paddingVertical: 10, borderRadius: 20, width: 200, color: "white", padding: 1 }}>
                  <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 19 }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text>
                  Create An Account <TouchableOpacity onPress={signupnav}><Text style={{ fontWeight: "600", textDecorationLine: 'underline', color: "blue" }}>Signup</Text></TouchableOpacity>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Login
