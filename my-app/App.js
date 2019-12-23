import React,{useState} from 'react';
import { StyleSheet, Text,TextInput, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput.js';

export default function App() {
  const [goal, setGoal] = useState([]);
  const handleGoal = (goalTitle) =>  { setGoal(currGoals => [
    ...currGoals, {key: Math.random().toString(), value: goalTitle} ]); };

  return (
    <View  style= { styles.screen}>
      <GoalInput onAddGoal ={handleGoal} />
      <FlatList
        data= {goal}
        renderItem= {goalItem => <GoalItem title ={goalItem.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50,
  },
});