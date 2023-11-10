import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function ToDoList(){
  const [text, setText] = React.useState('');
    return(
    <ScrollView>
        {tasks.map((task, index) => (
          <Pressable>
            <View style={[styles.task]}>
              <Text key={index} style={styles.taskText}>{task}</Text>
            </View>
          </Pressable>
        ))}
    </ScrollView>
    )
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  }
}); 


 
  
