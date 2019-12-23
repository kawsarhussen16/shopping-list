import React,{useState} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

const GoalInput = ({onAddGoal}) => {
  const [enteredTask, setEnteredTask] = useState('');
  const handleInput= (input) => setEnteredTask(input);
    return (
        <View style={styles.inputContainer}>
        <TextInput placeholder= 'Course Goal' style={styles.inputBox} onChangeText= {handleInput}/>
        <Button title='ADD'  onPress={()=> onAddGoal(enteredTask)}/>
      </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
      flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    inputBox:{
      borderColor : 'black',
      borderWidth : 1,
      backgroundColor: 'grey',
      width: "80%",
      padding: 5,  
    }
  });
