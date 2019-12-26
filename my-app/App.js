import React,{useState} from 'react';
import { StyleSheet, Text,TextInput, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput.js';

export default function App() {
  const [goal, setGoal] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const handleGoal = (goalTitle) =>  {
    (goalTitle.length> 0) ?
    setGoal(currGoals => [
    ...currGoals, {id: Math.random().toString(), value: goalTitle} ]) : (alert("No item added") ); 
    setAddMode(false)
  };
  const removeGoal = goalId => {
    setGoal(curGoal => {
      return curGoal.filter( goal => goal.id !==  goalId)
    })
  }
  const cancelOnClick = () =>{
    setAddMode(false)
  }
  return (
    <View  style= { styles.screen}>
      <Button title="Add New Item" onPress={()=> setAddMode(true)} />
      <GoalInput visible={addMode} onAddGoal ={handleGoal} cancelOnClick= {cancelOnClick} />
      <Text style={styles.header}> My Grocery List : </Text>
      <FlatList
        keyExtractor= {(item, i)=> item.id }
        data= {goal}
        renderItem= {goalItem => <GoalItem onDelete={()=> removeGoal(goalItem.item.id)} title ={goalItem.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50,
  },
  header:{
    textAlign: "center",
    color: 'olive',
    fontSize: 20,
    margin: 10, 
  }
});