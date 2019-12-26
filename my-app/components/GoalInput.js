import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Modal } from 'react-native';

const GoalInput = ({onAddGoal, visible, cancelOnClick}) => {
  const [enteredTask, setEnteredTask] = useState('');
  const handleInput= (input) => {
      setEnteredTask(input);
  }
  const goalHandler = () => {
    onAddGoal(enteredTask);
    setEnteredTask('')
  }

  return ( 
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
          <TextInput 
            placeholder= 'Enter your grocery list...' 
            style={styles.inputBox} 
            onChangeText= {handleInput}
          />
          <View> 
              <View style={styles.buttonContainer}> 
                <View  style={styles.button}>
                  <Button 
                      title='Cancel'
                      color ='tomato'
                      onPress={cancelOnClick}
                  /> 
                </View>
                <View style={styles.button} >
                  <Button 
                  title='ADD'  
                  onPress={goalHandler}
                  />  
                </View>     
              </View> 
          </View>
      </View>
    </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    inputBox:{
      borderColor : 'black',
      borderWidth : 1,
      width: "80%",
      padding: 5,  
      borderRadius: 5,
      marginBottom : 5,
    },
    buttonContainer:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%'
    },
    button:{
      width: '40%',
    }
    
  });