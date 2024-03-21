import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#7da453',
    backgroundColor: '#7da453',
    borderRadius: 10,
    margin: 8,
  },
  container_taskDone: {
    borderWidth: 1,
    borderColor: '#37474f',
    backgroundColor: '#37474f',
    borderRadius: 10,
    margin: 8,
  },
  text_description: {color: '#fff', margin: 15, fontSize: 20},
  text_taskDone: {
    color: '#808080',
    margin: 15,
    fontSize: 20,
    textDecorationLine: 'line-through',
  },
});
