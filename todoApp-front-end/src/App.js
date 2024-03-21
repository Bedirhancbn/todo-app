import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import Task from './Components/Task';
import CreateTask from './Components/CreateTask';
import axios from 'axios';
import moment from 'moment';
const URL = 'http://10.0.2.2:3000/todo';

function App() {
  const [list, setList] = useState([]);

  async function fetchData() {
    await axios.get(URL).then(response => {
      setList(response.data);
      /* console.log(response.data); */
    });
  }
  const [text, setText] = useState('');

  /* {text: 'Çöp Dökülecek', completed: false},
  {text: 'Oda toplanacak', completed: false},
  {text: 'Markete gidilecek', completed: false}, */

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddTodoPress = () => {
    setList([...list, {text: text, completed: false}]);
    setText('');
    var throwDate = moment()
      .utcOffset('+05:30')
      .format('YYYY-MM-DD hh:mm:ss a');

    /* axios
      .post(URL, {
        todoDescription: text,
        todoComplete: false,
        date: throwDate,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); */
  };

  const deleteTodoLongPress = index => {
    const confirmDelete = () => {
      const todoId = list[index]._id;
      const newList = [...list];
      newList.splice(index, 1);
      setList(newList);
      axios
        .delete(`${URL}/${todoId}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    Alert.alert('Alert ', 'Are you sure want to delete it?', [
      {
        text: 'Cancel',
      },
      {text: 'OK', onPress: confirmDelete},
    ]);
  };

  const toggleTaskCompletion = index => {
    const newList = [...list];
    const todoId = list[index]._id;
    newList[index].todoComplete = !newList[index].todoComplete;
    setList(newList);
    axios
      .put(`${URL}/${todoId}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const activeTasksCount = list.filter(task => !task.todoComplete).length;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text_title}>Yapılacaklar</Text>
        <Text style={styles.countOfTask}>{activeTasksCount}</Text>
      </View>
      <View style={styles.taskList}>
        <FlatList
          data={list}
          renderItem={({item, index}) => (
            <Task
              text={item.todoDescription}
              completed={item.todoComplete}
              onPress={() => toggleTaskCompletion(index)}
              deleteTask={() => deleteTodoLongPress(index)}
            />
          )}
        />
      </View>
      <CreateTask
        value={text}
        onChangeText={setText}
        onPress={text.length > 0 ? handleAddTodoPress : null}
      />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#102027'},
  text_title: {
    color: 'orange',
    margin: 15,
    fontSize: 40,
    marginTop: 20,
    fontWeight: 'bold',
  },
  taskList: {flex: 1},
  countOfTask: {
    position: 'absolute',
    margin: 15,
    marginTop: 20,
    marginLeft: 330,
    color: 'orange',
    fontSize: 40,
  },
});
