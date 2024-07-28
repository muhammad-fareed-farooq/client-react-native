import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Add_Task = () => {
    const navigation = useNavigation();
    const theme = useTheme();

    const navigateTo = (screen) => {
        navigation.navigate(screen);
    }

    const goback = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={goback}>
                    <Icon name="arrow-back" size={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.optionContainer}>
                <OptionButton onPress={() => navigateTo('createTask')} icon="create-outline" label="Create Task" />
                <OptionButton onPress={() => navigateTo('createTeam')} icon="people-outline" label="Create Team" />
                <OptionButton onPress={() => navigateTo('CreateTeam')} icon="add-outline" label="Create Project" />
                <OptionButton onPress={() => navigateTo('CreateEvent')} icon="calendar-outline" label="Create Event" />
            </View>
        </SafeAreaView>
    );
};

const OptionButton = ({ icon, label, onPress }) => (
    <Button mode="outlined" style={styles.button} contentStyle={styles.buttonContent} onPress={onPress}>
        <Icon name={icon} size={20} style={styles.icon} />
        <Text>{label}</Text>
    </Button>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    optionContainer: {
        width: '100%',
        marginBottom: 10,
        padding: 10
    },
    button: {
        marginVertical: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    icon: {
        marginRight: 10,
    },
});

export default Add_Task;
