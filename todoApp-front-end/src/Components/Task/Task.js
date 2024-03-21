import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './Task.style';

const Task = props => {
  return (
    <View>
      <View
        style={props.todoComplete ? styles.container_taskDone : styles.container}>
        <Pressable onPress={props.onPress} onLongPress={props.deleteTask}>
          <Text
            style={
              props.todoComplete ? styles.text_taskDone : styles.text_description
            }>
            {props.text}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Task;
