import React from 'react'
import { StyleSheet, Text,View } from 'react-native';

const GoalItem = ({title})=>  {
    return (
        <View  style={styles.listItem}> 
            <Text > {title}</Text> 
        </View>        
    );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "pink",
    borderColor: "black",
    borderWidth: 1
  }
});


export default GoalItem;