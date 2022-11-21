import React from 'react';
import {View, StyleSheet, Alert, Button} from 'react-native';

const PostRequestExample = () => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({postName: 'React updates '}),
  };

  const postExample = async () => {
    try {
      await fetch('https://reqres.in/api/posts', requestOptions).then(
        response => {
          response.json().then(data => {
            console.log(data);
            Alert.alert('Post created at : ', data.createdAt);
          });
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.btn}>
      <Button title="Click To Called Post API" onPress={postExample}>
        Click to make a Post request
      </Button>
    </View>
  );
};

export default PostRequestExample;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 2,
    borderWidth: 4,
    borderColor: 'blue',
  },
});
