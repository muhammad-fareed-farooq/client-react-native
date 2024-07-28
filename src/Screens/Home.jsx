
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import progressImage from '../../../assets/ThirdImg.jpeg'; // Make sure the path is correct

const Home = () => {

  const navigate = useNavigation()
  const [selectedCard, setSelectedCard] = useState(0); // Default to first card selected

  const handleCardPress = (cardIndex) => {
    setSelectedCard(cardIndex);
  };
  const todaytask = () => {
    navigate.navigate('todaytask')
  }

  const monthlyTask = () => {
    navigate.navigate('Monthlytask')
  }


  const Progreesnav = () => {
    navigate.navigate('progrees')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcons}>
          <Icon name="menu" size={30} color="#000" />
          <Text style={styles.dateText}>Friday, 26</Text>
          <Icon name="notifications" size={30} color="#000" />
        </View>
      </View>

      <Text style={styles.mainHeading}>
        Let's make a
        <Text style={styles.highlightText}> habits together </Text>
        <Icon name="emoji-events" size={24} color="#000" />
      </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScrollView}>
        <TouchableOpacity
          style={[
            styles.card,
            { backgroundColor: selectedCard === 0 ? '#756ef3' : '#fff' }
          ]}
          onPress={() => handleCardPress(0)}
        >
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, { color: selectedCard === 0 ? '#fff' : '#000' }]}>Application Design</Text>
            <Text style={[styles.cardSubtitle, { color: selectedCard === 0 ? '#fff' : '#000' }]}>UI Design Kit</Text>
            <View style={styles.cardProgress}>
              <Text style={[styles.cardProgressText, { color: selectedCard === 0 ? '#fff' : '#000' }]}>Progress</Text>
              <Text style={[styles.cardProgressValue, { color: selectedCard === 0 ? '#fff' : '#000' }]}>50/80</Text>
            </View>
          </View>
          <View style={styles.cardFooter}>
            <Image style={styles.cardAvatar} source={require('../../aseets/card1.jpeg')} />
            <Image style={styles.cardAvatar} source={require('../../aseets/card2.jpeg')} />
            <Image style={styles.cardAvatar} source={require('../../aseets/card3.jpeg')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            { backgroundColor: selectedCard === 1 ? '#756ef3' : '#fff' }
          ]}
          onPress={() => handleCardPress(1)}
        >
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, { color: selectedCard === 1 ? '#fff' : '#000' }]}>Project Management</Text>
            <Text style={[styles.cardSubtitle, { color: selectedCard === 1 ? '#fff' : '#000' }]}>PM Kit</Text>
            <View style={styles.cardProgress}>
              <Text style={[styles.cardProgressText, { color: selectedCard === 1 ? '#fff' : '#000' }]}>Progress</Text>
              <Text style={[styles.cardProgressValue, { color: selectedCard === 1 ? '#fff' : '#000' }]}>30/60</Text>
            </View>
          </View>
          <View style={styles.cardFooter}>
            <Image style={styles.cardAvatar} source={require('../../aseets/card1.jpeg')} />
            <Image style={styles.cardAvatar} source={require('../../aseets/card2.jpeg')} />
            <Image style={styles.cardAvatar} source={require('../../aseets/card3.jpeg')} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            { backgroundColor: selectedCard === 2 ? '#756ef3' : '#fff' }
          ]}
          onPress={() => handleCardPress(2)}
        >
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, { color: selectedCard === 2 ? '#fff' : '#000' }]}>Development</Text>
            <Text style={[styles.cardSubtitle, { color: selectedCard === 2 ? '#fff' : '#000' }]}>Dev Kit</Text>
            <View style={styles.cardProgress}>
              <Text style={[styles.cardProgressText, { color: selectedCard === 2 ? '#fff' : '#000' }]}>Progress </Text>
              <Text style={[styles.cardProgressValue, { color: selectedCard === 2 ? '#fff' : '#000' }]}>10/20</Text>
            </View>
          </View>
          <View style={styles.cardFooter}>
            <Image style={styles.cardAvatar} source={require('../../aseets/card1.jpeg')} />
            <Image style={styles.cardAvatar} source={require('../../aseets/card2.jpeg')} />
            <Image style={styles.cardAvatar} source={require('../../aseets/card3.jpeg')} />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity onPress={Progreesnav}>
        <Text style={styles.sectionTitle}>In Progress ➡</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={todaytask} style={styles.task}>
        <Text style={styles.taskCategory}>Productivity Mobile App</Text>
        <Text style={styles.taskTitle}>Create Detail Booking</Text>
        <Text style={styles.taskTime}>2 min ago</Text>
        <View style={styles.taskProgress}>
          <Text style={styles.taskProgressText}>60%</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={monthlyTask} style={styles.task}>
        <Text style={styles.taskCategory}>Banking Mobile App</Text>
        <Text style={styles.taskTitle}>Revision Home Page</Text>
        <Text style={styles.taskTime}>5 min ago</Text>
        <View style={styles.taskProgress}>
          <Text style={styles.taskProgressText}>70%</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.task}>
        <Text style={styles.taskCategory}>Online Course</Text>
        <Text style={styles.taskTitle}>Working On Landing Page</Text>
        <Text style={styles.taskTime}>8 min ago</Text>
        <View style={styles.taskProgress}>
          <Text style={styles.taskProgressText}>80%</Text>
        </View>
      </View>


    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    color: "black",
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: -5,
  },
  mainHeading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  highlightText: {
    color: '#6b62e7',
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  card: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marginRight: 10,
    width: 250,
    borderWidth: 1,
    borderColor: '#756ef3',
  },
  cardContent: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  cardProgress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardProgressText: {
    color: '#000',
  },
  cardProgressValue: {
    color: '#000',
  },
  cardFooter: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cardAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: -10,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  task: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    position: 'relative',
  },
  taskCategory: {
    fontSize: 14,
    color: '#7f8fa9',
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#002055',
  },
  taskTime: {
    fontSize: 12,
    color: '#7f8fa9',
    marginBottom: 10,
  },
  taskProgress: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  taskProgressImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  taskProgressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6b62e7',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
});


