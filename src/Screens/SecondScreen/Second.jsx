import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Second = () => {
  const navigated = useNavigation()

  const thirdnav = () => {
    navigated.navigate('third')

  }
  return (
    <ScrollView>
      <View style={{
        flex: 1,
        backgroundColor: "rgb(247, 247, 247)"
      }}>
        <View>
          <Image resizeMode='stretch' style={{ width: 390, height: 480 }} source={require("../../../aseets/secondScreen.jpg")} />
        </View>
        <View style={{ marginLeft: 40 }} >
          <Text style={{
            fontSize: 24,
            color: "#756ef3"
          }}>
            Task Managment
          </Text>
          <Text style={{
            fontSize: 40,
            marginTop: 10,
            color: "black"
          }}>
            Let's create a
          </Text>
          <Text style={{
            fontSize: 24,
            color: "#756ef3",
            fontWeight: "bold",
            fontSize: 35,
            letterSpacing: 2

          }}>
            space
            <Text style={{
              fontSize: 24,
              color: "black",
              fontWeight: "600",
              fontSize: 35,
              letterSpacing: 2


            }}>
              for your
            </Text>
          </Text>
          <Text style={{
            marginTop: 5,
            fontSize: 30,
            color: "black"
          }}>
            tasksworkflows.
          </Text>

        </View>
        <View style={{
          fontSize: 30, fontWeight: "bold", textAlign: "center",
          alignItems: "center", marginLeft: 100,
          marginTop: 10, backgroundColor: "#c7c2f8", height: 8, width: 8,
          borderRadius: 50
        }}>

          <View style={{
            fontSize: 30, fontWeight: "bold", textAlign: "center",
            alignItems: "center", marginRight: 30,
            backgroundColor: "#c7c2f8", height: 8, width: 8,
            borderRadius: 50
          }}>
            <View style={{
              fontSize: 30, fontWeight: "bold", textAlign: "center",
              alignItems: "center", marginLeft: -60,
              backgroundColor: "#7368ed", height: 8, width: 30,
              borderRadius: 50
            }}></View>

          </View>
        </View>
        <TouchableOpacity onPress={thirdnav}  >
          <Text style={{ color: "#7f8fa9", marginTop: 30, marginLeft: 40, fontSize: 20 }}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={thirdnav} style={{ alignSelf: 'flex-end', marginRight: 0, marginTop: -90 }}>
          <View style={{
            width: 120,
            height: 140,
            backgroundColor: '#7c6ff2',
            borderTopLeftRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{
              color: '#ffffff',
              fontSize: 50,
              position: 'absolute',
              // right: 50 // Adjust the position of the arrow
              textAlign: "center"
            }}>→</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Second