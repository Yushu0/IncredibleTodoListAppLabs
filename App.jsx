/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView,} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState(
    [
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]
  );
  
  return (
    <SafeAreaView>
      <ToDoList/>
      <ToDoForm/>
    </SafeAreaView>
  );
} 

export default App;
