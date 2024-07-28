import * as React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text, TextInput, Button, Chip, useTheme, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Create_Task = () => {
    const navigation = useNavigation()

    const theme = useTheme();

    const back = () => {
        navigation.navigate('Addtask');
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <Icon onPress={back} name="arrow-back-outline" size={30} />
                        <Text style={styles.headerText}>Add Task</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Task Name</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="Mobile Application design"
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Team Member</Text>
                        <View style={styles.teamContainer}>
                            {["https://randomuser.me/api/portraits/women/1.jpg",
                                "https://randomuser.me/api/portraits/women/2.jpg",
                                "https://randomuser.me/api/portraits/men/1.jpg",
                                "https://randomuser.me/api/portraits/men/2.jpg"].map((uri, index) => (
                                    <View key={index} style={styles.avatarContainer}>
                                        <Avatar.Image size={50} source={{ uri }} />
                                        <Text style={styles.avatarText}>{"Name"}</Text>
                                    </View>
                                ))}
                            <Icon name="add-circle-outline" size={50} color="#7B61FF" />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Date</Text>
                        <TextInput
                            mode="outlined"
                            placeholder="November 01, 2021"
                            style={styles.input}
                        />
                    </View>

                    <View style={styles.timeContainer}>
                        <View style={styles.timeInputContainer}>
                            <Text style={styles.label}>Start Time</Text>
                            <TextInput
                                mode="outlined"
                                placeholder="9:30 am"
                                style={styles.timeInput}
                            />
                        </View>
                        <View style={styles.timeInputContainer}>
                            <Text style={styles.label}>End Time</Text>
                            <TextInput
                                mode="outlined"
                                placeholder="3:30 pm"
                                style={styles.timeInput}
                            />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Board</Text>
                        <View style={styles.boardContainer}>
                            <Chip mode="outlined" style={styles.chip}>Urgent</Chip>
                            <Chip mode="outlined" selected={true} style={[styles.chip, styles.selectedChip]}>Running</Chip>
                            <Chip mode="outlined" style={styles.chip}>Ongoing</Chip>
                        </View>
                    </View>

                    <Button mode="contained" style={styles.saveButton}>
                        Save
                    </Button>
                </ScrollView>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 80,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#666',
    },
    input: {
        backgroundColor: '#fff',
    },
    teamContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    avatarContainer: {
        alignItems: 'center',
        marginRight: 10,
    },
    avatarText: {
        marginTop: 5,
        fontSize: 12,
        color: '#666',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    timeInputContainer: {
        flex: 1,
        marginRight: 10,
    },
    timeInput: {
        backgroundColor: '#fff',
    },
    boardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chip: {
        marginRight: 10,
    },
    selectedChip: {
        backgroundColor: '#7B61FF',
    },
    saveButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#7B61FF',
    },
});

export default Create_Task;
