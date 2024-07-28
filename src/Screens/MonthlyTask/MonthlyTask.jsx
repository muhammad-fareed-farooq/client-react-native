import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Icon } from 'react-native-elements';

const MonthlyTask = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState('2021-09-12');
    const tasksForDay = 15; // example task count

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" type="ionicon" size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Today Task</Text>
                <TouchableOpacity>
                    <Icon name="create-outline" type="ionicon" size={24} />
                </TouchableOpacity>
            </View>

            <View style={styles.headerDetails}>
                <View style={styles.headerLeft}>
                    <Text style={styles.headerDateText}>September, 12 ✍️</Text>
                    <Text style={styles.headerTaskCount}>{tasksForDay} tasks today</Text>
                </View>
                <TouchableOpacity style={styles.calendarButton}>
                    <Icon name="calendar-outline" type="ionicon" color="#FFF" size={20} />
                </TouchableOpacity>
            </View>

            <Calendar
                current={selectedDate}
                onDayPress={(day) => setSelectedDate(day.dateString)}
                markedDates={{
                    '2021-09-12': { selected: true, selectedColor: '#5F87E7' },
                    '2021-09-03': { marked: true },
                    '2021-09-09': { marked: true },
                    '2021-09-27': { marked: true },
                }}
                theme={{
                    calendarBackground: '#FFF',
                    textSectionTitleColor: '#2D4150',
                    selectedDayBackgroundColor: '#5F87E7',
                    selectedDayTextColor: '#FFF',
                    todayTextColor: '#5F87E7',
                    dayTextColor: '#2D4150',
                    textDisabledColor: '#D9E1E8',
                    dotColor: '#5F87E7',
                    selectedDotColor: '#FFF',
                    arrowColor: '#5F87E7',
                    monthTextColor: '#2D4150',
                    indicatorColor: '#2D4150',
                    textDayFontFamily: 'monospace',
                    textMonthFontFamily: 'monospace',
                    textDayHeaderFontFamily: 'monospace',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 18,
                    textDayHeaderFontSize: 16,
                }}
                style={styles.calendar}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 16,
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
    headerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    headerLeft: {
        flexDirection: 'column',
    },
    headerDateText: {
        marginTop: 60,
        color: '#1E1E1E',
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerTaskCount: {
        color: '#888',
        fontSize: 14,
    },
    calendarButton: {
        marginTop: 60,

        backgroundColor: '#5F87E7',
        borderRadius: 12,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calendar: {
        borderWidth: 1,
        borderColor: '#EEE',
        borderRadius: 10,
        marginTop: 16,
    },
});

export default MonthlyTask;