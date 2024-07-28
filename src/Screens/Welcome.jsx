import { View, Text, Image, TouchableOpacity, ScrollViewComponent, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigated = useNavigation()

    const scnav = () => {
        navigated.navigate('second')

    }
    return (
        <ScrollView>
            <View>
                <View>
                    <Image resizeMode='stretch' style={{ width: 400, height: 400 }} source={require("../../aseets/welcome.jpg")} />
                </View>
                <View style={{ backgroundColor: "#fff", marginTop: -30, height: 450, borderRadius: 30 }}>
                    <View style={{
                        fontSize: 30, fontWeight: "bold", textAlign: "center",
                        alignItems: "center", marginLeft: 215,
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
                    <Text style={{
                        fontSize: 30, fontWeight: "bold", textAlign: "center",
                        fontSize: 45,
                        marginTop: 30, color: "#7368ed",
                        fontFamilye: "sans-serif-medium",
                    }}>Taskcy</Text>
                    <Text style={{
                        fontSize: 32, fontWeight: "bold", textAlign: "center",
                        marginTop: 10, color: "#2f394b"
                    }}>Building Better</Text>
                    <Text style={{
                        fontSize: 32, fontWeight: "bold", textAlign: "center",
                        color: "#2f394b"
                    }}>Workplaces</Text>
                    <Text style={{
                        // width:300,
                        marginTop: 10,
                        fontSize: 18, fontWeight: "bold", textAlign: "center",
                        color: "#b9b9vb"
                    }}>Create a unique emotional story That </Text>
                    <Text style={{
                        // width:300,
                        marginTop: 5,
                        fontSize: 18, fontWeight: "bold", textAlign: "center",
                        color: "#b9b9vb"
                    }}>describes better than words </Text>


                    <View style={{
                        flex: 1,
                        alignItems: "center",
                        marginTop: 30
                    }}>
                        <TouchableOpacity
                            onPress={scnav} style={{
                                backgroundColor: "#6b62e7", padding: 20, width: 300,
                                borderRadius: 15,
                                shadowColor: "#6c56ff", // Shadow color
                                shadowOffset: { width: 0, height: 2 }, // Shadow offset
                                shadowOpacity: 1.2, // Shadow opacity
                                shadowRadius: 3.84, // Shadow radius
                                elevation: 20, // Elevation for Android
                            }}>
                            <Text style={{ fontSize: 23, fontWeight: "bold", color: "white", textAlign: "center" }}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View >
        </ScrollView>

    )
}

export default Welcome