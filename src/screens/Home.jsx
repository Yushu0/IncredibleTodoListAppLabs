import React, { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';


export default function Home ({ navigation }) {
    const [toDoList, setToDoList] = useState([
        'Do laundry',
        'Go to the gym',
        'Walk the dog'
      ]);
      
    
      const handleAddTask = (task) => {
        setTasks([...tasks, task]);

      };

    return (
        <SafeAreaView>
            <ToDoList tasks={toDoList} />
            <ToDoForm onAddTask={handleAddTask}/>
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </SafeAreaView>
    )
}