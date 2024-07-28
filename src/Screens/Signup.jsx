import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Image, Alert, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { signup_service } from '../../service/auth_service'

const Signup = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigation = useNavigation()

  const loginnav = () => {
    navigation.navigate("Login")
  }


  const onPress_Handle = async () => {

    const data = { username, email, password };

    try {
      const res = await signup_service(data)

      console.log(res.data),
        console.log(data)

      if (res.data) {
        navigation.navigate("Login")
        alert("Sucsses")
      }
    } catch (error) {
      console.log({ error })

    }

    // // Assuming this is where you would send the signup data to your server

    // navigation.navigate('Login', { email, password })
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, paddingBottom: 20, backgroundColor: "#ffff" }}>
      <ScrollView>
        <View style={{ backgroundColor: '#ffff', flex: 1 }}>
          <Image resizeMode='cover' style={{ height: 250, width: 400 }} source={require("../../aseets/img1.png")} />
          <Text style={{ fontSize: 50, fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: -10 }}>
            Signup
          </Text>

          <View style={{ paddingHorizontal: 20, gap: 10, marginTop: 80 }}>
            <View style={{ gap: 15 }}>
              <View>
                <Text style={{ color: "#000000" }}>
                  Username
                </Text>
                <TextInput
                  keyboardType='default'
                  value={username}
                  style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, color: "#000" }}
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
              <View>
                <Text style={{ color: "#000000" }}>
                  Email Address
                </Text>
                <TextInput
                keyboardType='email-address'
                  value={email}
                  style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, color: "#000" }}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View>
                <Text style={{ color: "#000000" }}>
                  Password
                </Text>
                <TextInput
                keyboardType='visible-password'
                  value={password}
                  style={{ borderWidth: 1, borderColor: 'lightgray', borderRadius: 10, color: "#000" }}
                  secureTextEntry
                  onChangeText={(text) => { setPassword(text) }}
                />
              </View>

              <View style={{ backgroundColor: "#fff", alignItems: "center", marginTop: 20 }}>
                <TouchableOpacity
                  onPress={onPress_Handle}
                  style={{ borderWidth: 2, paddingVertical: 10, borderRadius: 20, width: 200, color: "white", padding: 1 }}>
                  <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', fontSize: 19 }}>
                    Signup
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ color: "#000" }}>Already have an account? </Text>
                <TouchableOpacity onPress={loginnav}>
                  <Text style={{ fontWeight: "600", textDecorationLine: 'underline', color: "blue" }}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default Signup
