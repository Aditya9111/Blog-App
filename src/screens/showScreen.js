import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation}) => {
  const route = useRoute();
  const {id} = route.params;

  const {state} = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{blogPost.title}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
  },

  content: {
    fontSize: 25,
  },
  titleContainer: {
    marginLeft: 5,
  },
  contentContainer: {
    marginLeft: 5,
  },
});

export default ShowScreen;
