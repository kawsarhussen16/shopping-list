import React,{useState} from 'react';
import { StyleSheet, Text,TextInput, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput.js';

export default function App() {
  const [goal, setGoal] = useState([]);
  const handleGoal = (goalTitle) =>  { setGoal(currGoals => [
    ...currGoals, {id: Math.random().toString(), value: goalTitle} ]); };
  const removeGoal = goalId => {
    setGoal(curGoal => {
      return curGoal.filter( goal => goal.id !==  goalId)
    })

  }
  return (
    <View  style= { styles.screen}>
      <GoalInput onAddGoal ={handleGoal} />
      <FlatList
        keyExtractor= {(item, i)=> item.id }
        data= {goal}
        renderItem= {goalItem => <GoalItem onDelete={removeGoal.bind(this, goalItem.item.id)} title ={goalItem.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50,
  },
});