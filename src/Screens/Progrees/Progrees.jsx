import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { ProgressCircle } from 'react-native-svg-charts';

const Progrees = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" type="ionicon" size={24} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Task Status</Text>
                    <TouchableOpacity>
                        <Icon name="settings-outline" type="ionicon" size={24} />
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.circleContainer}>
                        <ProgressCircle
                            style={styles.progressCircle}
                            progress={0.65}
                            progressColor={'rgb(134, 65, 244)'}
                            backgroundColor={'#FF9800'}
                        >
                            <View>
                                <Text style={styles.percentageText}>65%</Text>
                                <Text style={styles.completeText}>Complete</Text>
                            </View>
                        </ProgressCircle>
                    </View>
                </View>

                <View style={styles.legend}>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: '#8BC34A' }]} />
                        <Text style={styles.legendText}>To Do</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: '#FF9800' }]} />
                        <Text style={styles.legendText}>In Progress</Text>
                    </View>
                    <View style={styles.legendItem}>
                        <View style={[styles.legendColor, { backgroundColor: '#3F51B5' }]} />
                        <Text style={styles.legendText}>Completed</Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>Monthly</Text>

                {['Completed', 'In Progress', 'To Do'].map((status, index) => (
                    <View key={index} style={styles.statusCard}>
                        <View style={styles.statusHeader}>
                            <Text style={styles.statusTitle}>{status}</Text>
                            <TouchableOpacity>
                                <Icon name="ellipsis-horizontal" type="ionicon" size={24} color="#888" />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.statusDetail}>
                            {status === 'Completed' && '18 Task now - 18 Task Completed'}
                            {status === 'In Progress' && '2 Task now - 1 Started'}
                            {status === 'To Do' && '2 Task now - 1 Upcoming'}
                        </Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default Progrees;

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
    circleContainer: {
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 24,
    },
    progressCircle: {

        justifyContent: "center",
        alignItems: "center",
        height: 200,
        width: 200,
    },
    percentageText: {
        position: 'absolute',
        top: '40%',
        left: '40%',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    },
    completeText: {
        position: 'absolute',
        top: '50%',
        left: '37%',
        fontSize: 16,
        color: '#666',
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 16,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    legendColor: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 8,
    },
    legendText: {
        fontSize: 14,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    statusCard: {
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    statusHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    statusTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    statusDetail: {
        fontSize: 14,
        color: '#666',
    },
});
