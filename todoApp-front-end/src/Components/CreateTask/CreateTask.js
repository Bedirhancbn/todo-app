import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './CreateTask.style';

const CreateTask = props => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput_color}
        placeholder="Add Todo"
        placeholderTextColor={'#808080'}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <View style={styles.seperator} />
      <View>
        <TouchableOpacity
          onPress={props.onPress}
          style={
            props.value.length > 0 ? styles.notEmpty_buton : styles.empty_buton
          }>
          <Text style={styles.buton_text}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateTask;
