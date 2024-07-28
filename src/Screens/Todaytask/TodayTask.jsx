import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const tasks = [
    {
        time: '10 am',
        title: 'Wareframe elements',
        duration: '10am - 11am',
        participants: [
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
        ],
        backgroundColor: '#A3C4F3',
        emoji: '😊',
    },
    {
        time: '11 am',
        title: 'Mobile app Design',
        duration: '11:40am - 12:40pm',
        participants: [
            'https://randomuser.me/api/portraits/men/3.jpg',
            'https://randomuser.me/api/portraits/women/4.jpg',
        ],
        backgroundColor: '#B4E197',
        emoji: '😍',
    },
    {
        time: '01 pm',
        title: 'Design Team call',
        duration: '01:20pm - 02:20pm',
        participants: [
            'https://randomuser.me/api/portraits/men/5.jpg',
            'https://randomuser.me/api/portraits/women/6.jpg',
        ],
        backgroundColor: '#F3D19C',
        emoji: '😪',
    },
];

const TodayTask = () => {
    const navigated = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Icon name="arrow-back" onPress={() => navigated.navigate("Home")} type="ionicon" size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Today Task</Text>
                <TouchableOpacity>
                    <Icon name="create-outline" type="ionicon" size={24} />
                </TouchableOpacity>
            </View>
            <View style={styles.dateContainer}>
                <Text style={styles.date}>October, 20 📝</Text>
                <Text style={styles.taskCount}>15 tasks today</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateScroller}>
                {['19 Sat', '20 Sun', '21 Mon', '22 Tue', '22 Tue', '22 Tue'].map((date, index) => (
                    <TouchableOpacity key={index} style={index === 1 ? styles.activeDate : styles.dateItem}>
                        <Text style={index === 1 ? styles.activeDateText : styles.dateText}>{date}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <ScrollView style={styles.taskList}>
                {tasks.map((task, index) => (
                    <View key={index} style={[styles.taskItem, { backgroundColor: task.backgroundColor }]}>
                        <View style={styles.taskHeader}>
                            <Text style={styles.taskTime}>{task.time}</Text>
                            <Text>{task.emoji}</Text>
                        </View>
                        <Text style={styles.taskTitle}>{task.title}</Text>
                        <Text style={styles.taskDuration}>{task.duration}</Text>
                        <View style={styles.participants}>
                            {task.participants.map((participant, i) => (
                                <Image key={i} source={{ uri: participant }} style={styles.avatar} />
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    dateContainer: {
        marginTop: 20,
    },
    date: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
    taskCount: {
        color: '#888',
    },
    dateScroller: {
        marginVertical: 20,
    },
    dateItem: {
        // height: 50,
        height: 150,

        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#EEE',
        marginRight: 10,
        borderRadius: 10,
    },
    activeDate: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#A3C4F3',
        marginRight: 10,
        borderRadius: 10,
    },
    dateText: {
        color: '#848a94',
    },
    activeDateText: {
        height: 50,
        color: '#FFF',
    },
    taskList: {
        marginTop: -320,
        flex: 1,
    },
    taskItem: {
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    },
    taskHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    taskTime: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    taskTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    taskDuration: {
        color: '#666',
    },
    participants: {
        flexDirection: 'row',
        marginTop: 10,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 5,
    },
});

export default TodayTask;