import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar, Button, Icon } from 'react-native-elements';

const ProfileScreen = () => {
    const Navigation = useNavigation()
 
    const goback =()=>{
        Navigation.goBack();
    }
    return (
        <ScrollView>
            <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Icon name="arrow-back" size={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Avatar
                    size="large"
                    rounded
                    source={require("../../../aseets/Prolile.png")} // Replace with your image URL
                    containerStyle={styles.avatar}
                />
                <Text style={styles.name}>Alvart Ainstain</Text>
                <Text style={styles.username}>@albart.ainstain</Text>
                <Button
                    title="View Profile"
                    buttonStyle={styles.profileButton}
                    titleStyle={styles.profileButtonText}
                    type="outline"
                />

                <Text style={styles.sectionTitle}>Workspace</Text>
                <View style={styles.workspace}>
                    <Text style={styles.workspaceText}>Ui Design</Text>
                    <Button
                        title="Invite"
                        buttonStyle={styles.inviteButton}
                        titleStyle={styles.inviteButtonText}
                        type="outline"
                    />
                </View>

                <Text style={styles.sectionTitle}>Manage</Text>
                <View style={styles.manageContainer}>
                    <TouchableOpacity style={styles.manageItem}>
                        <Text style={styles.manageText}>Team</Text>
                        <Text style={styles.manageCount}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.manageItem}>
                        <Text style={styles.manageText}>Labels</Text>
                        <Text style={styles.manageCount}>13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.manageItem}>
                        <Text style={styles.manageText}>Task</Text>
                        <Text style={styles.manageCount}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.manageItem}>
                        <Text style={styles.manageText}>Member</Text>
                        <Text style={styles.manageCount}>13</Text>
                    </TouchableOpacity>
                </View>

                <Button
                    title="Log Out"
                    buttonStyle={styles.logoutButton}
                    titleStyle={styles.logoutButtonText}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatar: {
        marginTop: 40,
        marginBottom: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    username: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
    },
    profileButton: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginBottom: 30,
    },
    profileButtonText: {
        color: '#000',
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    workspace: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    workspaceText: {
        fontSize: 16,
    },
    inviteButton: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    inviteButtonText: {
        color: '#000',
        fontSize: 14,
    },
    manageContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
    },
    manageItem: {
        width: '45%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginVertical: 10,
    },
    manageText: {
        fontSize: 16,
        marginBottom: 10,
    },
    manageCount: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    logoutButton: {
        marginTop: 30,
        backgroundColor: '#7a5ff3',
        borderRadius: 30,
        paddingVertical: 15,
        width: '80%',
    },
    logoutButtonText: {
        marginRight: 60,
        color: '#fff',
        fontSize: 16,
    },
});

export default ProfileScreen;
