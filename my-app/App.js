import React,{useState} from 'react';
import { StyleSheet, Text,TextInput, View, Button } from 'react-native';

export default function App() {
  const [enteredTask, setEnteredTask] = useState('');
  const [goal, setGoal] = useState([]);
  const handleInput= (input) => setEnteredTask(input);
  const handleGoal = () => setGoal([...goal, enteredTask]);

  return (
    <View  style= { styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder= 'Course Goal' style={styles.inputBox} onChangeText= {handleInput}/>
        <Button title='ADD'  onPress={handleGoal}/>
      </View>
      <View>
        {goal.map(goal => (
          <View style={styles.listItem}> 
            <Text key={goal} > {goal}</Text> 
          </View> ) )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50,
  },
  inputContainer:{
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
  },
  inputBox:{
    margin: 1, padding: 2, borderColor: 'black', borderWidth: 1, width:  '80%'
  },
  listItem:{
    padding: 10,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 1
  }
  
});
