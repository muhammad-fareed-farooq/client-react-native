import React from 'react';
import { View, StyleSheet, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Chip, Avatar } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const projects = [
    {
        id: '1',
        title: 'Unity Dashboard',
        category: 'Design',
        progress: 0.5,
        totalTasks: 20,
        completedTasks: 10,
        participants: [
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/women/2.jpg',
        ],
    },
    {
        id: '2',
        title: 'Instagram Shots',
        category: 'Marketing',
        progress: 0.75,
        totalTasks: 20,
        completedTasks: 15,
        participants: [
            'https://randomuser.me/api/portraits/men/3.jpg',
            'https://randomuser.me/api/portraits/women/4.jpg',
        ],
    },
    {
        id: '3',
        title: 'Cubbles',
        category: 'Design',
        progress: 0.5,
        totalTasks: 20,
        completedTasks: 10,
        participants: [
            'https://randomuser.me/api/portraits/men/5.jpg',
            'https://randomuser.me/api/portraits/women/6.jpg',
        ],
    },
    {
        id: '4',
        title: 'Ui8 Platform',
        category: 'Design',
        progress: 0.5,
        totalTasks: 20,
        completedTasks: 10,
        participants: [
            'https://randomuser.me/api/portraits/men/7.jpg',
            'https://randomuser.me/api/portraits/women/8.jpg',
        ],
    },
];

const Project = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = React.useState('Favourites');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" type="ionicon" size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Projects</Text>
                <TouchableOpacity>
                    <Icon name="add" type="ionicon" size={24} />
                </TouchableOpacity>
            </View>
            <TextInput style={styles.searchBar} placeholder="Search" />
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'Favourites' && styles.activeTab]}
                    onPress={() => setActiveTab('Favourites')}
                >
                    <Text style={[styles.tabText, activeTab === 'Favourites' && styles.activeTabText]}>Favourites</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'Recents' && styles.activeTab]}
                    onPress={() => setActiveTab('Recents')}
                >
                    <Text style={[styles.tabText, activeTab === 'Recents' && styles.activeTabText]}>Recents</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'All' && styles.activeTab]}
                    onPress={() => setActiveTab('All')}
                >
                    <Text style={[styles.tabText, activeTab === 'All' && styles.activeTabText]}>All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={projects}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                            <Chip style={styles.cardTasks}>
                                {item.completedTasks}/{item.totalTasks}
                            </Chip>
                        </View>
                        <Text style={styles.cardCategory}>{item.category}</Text>
                        <View style={styles.progressBar}>
                            <View
                                style={[
                                    styles.progressFill,
                                    { width: `${item.progress * 100}%` },
                                ]}
                            />
                        </View>
                        <View style={styles.participants}>
                            {item.participants.map((participant, index) => (
                                <Avatar.Image
                                    key={index}
                                    size={30}
                                    source={{ uri: participant }}
                                    style={styles.participantImage}
                                />
                            ))}
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default Project;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchBar: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 8,
        marginBottom: 16,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    tab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
    },
    activeTab: {
        borderColor: '#007BFF',
        borderWidth: 1,
    },
    tabText: {
        fontSize: 16,
        color: '#6c757d',
    },
    activeTabText: {
        color: '#007BFF',
    },
    card: {
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    cardTasks: {
        fontSize: 14,
        color: '#6c757d',
        backgroundColor: 'white',
    },
    cardCategory: {
        fontSize: 14,
        color: '#6c757d',
        marginBottom: 8,
    },
    progressBar: {
        height: 10,
        backgroundColor: '#e9ecef',
        borderRadius: 5,
        overflow: 'hidden',
        marginBottom: 8,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#b0d97f',
    },
    participants: {
        flexDirection: 'row',
        marginTop: 8,
    },
    participantImage: {
        marginRight: 8,
    },
});
