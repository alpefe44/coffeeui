import { View, Text } from 'react-native'
import React from 'react'

const CategoryDetail = ({ route }) => {
  const { id } = route.params;
  console.log(id)
  return (
    <View style = {{flex:1 , height:'100%' , justifyContent:'center' , alignItems:'center'}}>
      <Text style = {{color:'black'}}>{id}</Text>
    </View>
  )
}

export default CategoryDetail