import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../config/colors';

const searchinput = () => {
  return (
    <View
      style={{
        borderRadius: 25,
        overflow: "hidden",
      }}
    >
      <BlurView
        intensity={30}
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: "100%",
            color: colors.white,
            fontSize: 10 * 1.7,
            padding: 10,
            paddingLeft: 10 * 3.5,
          }}
          placeholder="Find Your Coffee..."
          placeholderTextColor={colors.dark}
        />
        <Ionicons
          style={{
            position: "absolute",
            left: 10,
          }}
          name="search"
          color={colors.dark}
          size={10 * 2}
        />
      </BlurView>
    </View>
  )
}

export default searchinput