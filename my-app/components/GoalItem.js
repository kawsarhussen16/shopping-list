import React from 'react'
import { StyleSheet, Text,View ,TouchableOpacity, Button} from 'react-native';

const GoalItem = ({title, onDelete})=>  {
    return (
      <TouchableOpacity style={styles.listBox} >
        <View  style={styles.listItem}> 
            <Text style={styles.textStyle} > {title}</Text> 
            <Button style={styles.deleteButton} title= 'delete' onPress= {onDelete} />
        </View>   
      </TouchableOpacity>     
    );
}

const styles = StyleSheet.create({
  listBox:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  listItem: {
    width: '100%',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 3,
    marginVertical: 3,
    backgroundColor: "pink",
    borderColor: "black",
    borderWidth: 1
  },
  textStyle:{
    width: '70%'
  },
  deleteButton:{
    width: '10%',
    borderRadius: 10
  }
});

export default GoalItem;