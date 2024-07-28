import React from 'react';
import { View, FlatList, StyleSheet, Text, TextInput, Image } from 'react-native';
import { ListItem, Avatar, Icon } from 'react-native-elements';

const DATA = [
    {
        id: '1',
        name: 'Jenny Alxinder',
        image: 'https://s3-alpha-sig.figma.com/img/ed3f/e563/7484dd2d4beece520bcd36e7bf4282b8?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U1ITM-386qkPjPRtE5Re5oYKPvr5Kf60TtUzgSXmT3xiUowMM6LjyKxEGoIFentT8pWD4b3q5F50~bRVtYeFu3EgPvMVk8JYLkx3HBqfyS8vpffKgbhPnVhPsU6DENirkJ~tKxAMezXtQZ3eall5DtT7m2AXdyIy83PJF5q68Horpmk4XhRuVngiFnGjXLbf9RjBdJAXU-vIksJM6Dv1XStjbrQ5xmi6QTskegy7ie0fd3XudY~YBQovQYjf~LxY1WNrzkwNZHbt6cSSeMsiCGYZhiI08E~TwKOW9Ltrfz4k63DOSgsiRtE3Lu9-3jcQZC9FgjKDBkfFNhQaSSYuUg__',
        status: 'Active now',
    },
    {
        id: '2',
        name: 'Team Align',
        image: 'https://s3-alpha-sig.figma.com/img/e07b/b72d/c130d596724f96243c64d44feb9f0b30?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kaB1bsO5E9lTm4UoOgCG8ajqusXrwKqAUFi~Q8Ks20BbQW0~oqj4J~hWTMIjGIhUPRHeDI6OA~IPhyKxpEvk4JDLYEeUHQwwalV2ROUfZl3foPVLLIsjN1GgzqBht6n5OQZBY9bXG1lDE~ipi-G1UF72Zw9oV2bCWsFU-NzxRiKaoFMs37FbbSSwtZBNKXt6km-MTjREpOM8wb0DqGDJ-mrG-fn2v6bNxYKdjbgP7N0fiBgbrmXPrwubxa~whiOzFke5BmocUeKkNqKMCZ44eGeORQrqkD9VxFbyGO~CcqdLw5GOqSKIt7cpE1D9hKyE7aXSzx3UVksDjdVwv54UfQ__', // Replace with your image URL
        status: 'Active 1h ago',
    },
    {
        id: '3',
        name: 'Alex Avishek',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        status: 'Active 1h ago',
    },
    {
        id: '4',
        name: 'Jafor Dicrose',
        image: 'https://s3-alpha-sig.figma.com/img/b6d6/8310/b8810198830e49724acabd934dd2a999?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J373MHNEXtj0QgOmYMmmTkePpKwfhSLntpSSJEiShNbMgQgII1WmiT5izsV~9Fhurzd~e0mU-G4IQoe8~clXMf8TCOPn7eizek8jSr11S6tYqMx7LQ6~JwX5ix7G2ZDC80AmKXylGZhC8gdhtnhMFqtf8pkLIQnjjwvlIDbCHX01Dee4gDrhRAdFH3gUS2OqUCVKi6S9TcewDjasUq2XNSN4hGvMv93Uw38-hO8DldukMYtM3vO5~CvDHB-Z2GCfdlf9zPgMBYrXtLXC0O3ij4RQxiKgj52rc~zGcRWknUw1-QLXjvnje9moWN2kjSeVE1827NsqrebGEIXcqv6L4g__',
        status: 'Active 1h ago',
    },
];

const ChatScreen = () => {
    const renderItem = ({ item }) => (
        <ListItem bottomDivider>
            <Avatar source={{ uri: item.image }} rounded />
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.status}</ListItem.Subtitle>
            </ListItem.Content>
            <Icon name="camera" type="font-awesome" />
        </ListItem>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrow-left" type="font-awesome" />
                <Text style={styles.headerText}>Chat</Text>
                <Icon name="plus" type="font-awesome" />
            </View>
            <TextInput
                style={styles.searchBar}
                placeholder="Search"
            />
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        paddingLeft: 20,
    },
});

export default ChatScreen;
