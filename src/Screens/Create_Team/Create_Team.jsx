import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Text, Button, Avatar } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const teamMembers = [
    { name: 'Jeny', uri: 'https://randomuser.me/api/portraits/women/1.jpg' },
    { name: 'mehrin', uri: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Avishek', uri: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Jafor', uri: 'https://randomuser.me/api/portraits/men/2.jpg' },
];

const Create_Team = () => {
    const navigation = useNavigation();
    const [teamType, setTeamType] = React.useState('Private');

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack("Addtask")}>
                        <Icon name="arrow-back" type="ionicon" size={24} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Create Team</Text>
                </View>

                <View style={styles.uploadContainer}>
                    <Image source={require("../../../aseets/profile.png")} style={styles.logo} />
                    <Text style={styles.uploadText}>Upload logo file</Text>
                    <Text style={styles.uploadSubText}>Your logo will publish always</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Team Name</Text>
                    <TextInput
                        placeholder="Team Align"
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Team Member</Text>
                    <View style={styles.teamContainer}>
                        {teamMembers.map((member, index) => (
                            <View key={index} style={styles.avatarContainer}>
                                <Avatar.Image size={50} source={{ uri: member.uri }} />
                                <Text style={styles.avatarText}>{member.name}</Text>
                            </View>
                        ))}
                        <TouchableOpacity>
                            <Icon name="add-circle-outline" type="ionicon" size={50} color="#7B61FF" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Type</Text>
                    <View style={styles.typeContainer}>
                        {['Private', 'Public', 'Secret'].map((type) => (
                            <Button
                                key={type}
                                mode={teamType === type ? 'contained' : 'outlined'}
                                onPress={() => setTeamType(type)}
                                style={[
                                    styles.typeButton,
                                    teamType === type && styles.selectedTypeButton,
                                ]}
                            >
                                {type}
                            </Button>
                        ))}
                    </View>
                </View>

                <Button mode="contained" style={styles.createButton}>
                    Create Team
                </Button>
            </View>
        </ScrollView>
    );
};

export default Create_Team;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 80,
    },
    uploadContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 16,
    },
    uploadText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    uploadSubText: {
        fontSize: 14,
        color: '#666',
    },
    inputContainer: {
        marginBottom: 24,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        color: '#666',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 8,
        backgroundColor: '#fff',
    },
    teamContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    avatarContainer: {
        alignItems: 'center',
        marginRight: 16,
        marginBottom: 8,
    },
    avatarText: {
        marginTop: 5,
        fontSize: 12,
        color: '#ddd',
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    typeButton: {
        flex: 1,
        marginHorizontal: 4,
        backgroundColor: "#fff"
    },
    selectedTypeButton: {
        backgroundColor: '#7B61FF',
    },
    createButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#7B61FF',
    },
});
