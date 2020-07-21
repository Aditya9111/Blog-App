import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

const BlogPostForm = ({onSubmit, initialValue}) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);

  return (
    <View>
      <Text style={styles.label}>Enter title</Text>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Blog</Text>
      <TextInput
        style={styles.input}
        placeholder="Blog Content"
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title="Add Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValue: {
    title: '',
    content: '',
  },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
    margin: 5,
  },

  label: {
    fontSize: 25,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default BlogPostForm;
