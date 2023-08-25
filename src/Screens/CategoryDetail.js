import { View, Text } from 'react-native'
import React from 'react'
import coffees from '../config/coffees';

const CategoryDetail = ({ route }) => {
  const { id } = route.params;
  console.log(id)
  return (
    <View style = {{flex:1 , height:'100%' , justifyContent:'center' , alignItems:'center'}}>
      <Text style = {{color:'black'}}>{id}</Text>
      {
        coffees.filter((item) => item.id === id).map((item) => (
          <Text>{item.name}</Text>
        ))
      }
    </View>
  )
}

export default CategoryDetail