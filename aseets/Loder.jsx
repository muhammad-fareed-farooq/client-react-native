import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export const Loader = ({ size = 'small', color = 'Black' }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator color={color} size={size} />
        </View>
    )
}