import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../../components/blogPostForm';

const EditScreen = ({navigation, route}) => {
  const id = route.params.id;

  const {state, editBlogPost} = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);

  return (
    <BlogPostForm
      initialValue={{title: blogPost.title, content: blogPost.content}}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, navigation.pop());
      }}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
});

export default EditScreen;
