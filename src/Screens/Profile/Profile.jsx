import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

const ProfileScreen = () => {

    const navigation = useNavigation()
    const profileData = {
        name: 'Alvart Ainstain',
        username: '@albart.ainstain',
        ongoing: 5,
        totalComplete: 10,
        menuSection: ['Settings', 'About', 'Help', 'Logout']
    };


    const navEdit = () => {
        navigation.navigate('editProfile')
    }

    const goback =()=>{
        navigation.goBack()
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Icon name="arrow-back" size={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.profileSection}>
                <Image
                    source={require("../../../aseets/Prolile.png")}
                    style={styles.profileImage}
                />
                <Text style={styles.name}>{profileData.name}</Text>
                <Text style={styles.username}>{profileData.username}</Text>
                <TouchableOpacity onPress={navEdit} style={styles.editButton}>
                    <Text style={styles.editText}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.statsSection}>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>{profileData.ongoing}</Text>
                    <Text style={styles.statLabel}>On Going</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>{profileData.totalComplete}</Text>
                    <Text style={styles.statLabel}>Total Complete</Text>
                </View>
            </View>
            <View style={styles.menuSection}>
                {profileData.menuSection.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.menuItem}>
                        <Text style={styles.menuText}>{item}</Text>
                        <Icon name="chevron-right" size={24} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    profileSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    username: {
        fontSize: 16,
        color: '#666',
    },
    editButton: {
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#4A90E2',
    },
    editText: {
        color: '#FFF',
        fontSize: 16,
    },
    statsSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
    menuSection: {
        marginTop: 10,
        padding: 10
    },
    menuItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    menuText: {
        fontSize: 16,
    },
});

export default ProfileScreen;
