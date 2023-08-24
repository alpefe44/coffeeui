import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../config/colors';
import { BlurView } from 'expo-blur'
import Searchinput from '../components/searchinput';
import CategoryList from '../components/CategoryList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, alignItems: 'center' }}>
        <Ionicons name='menu' size={32} color={colors['dark-light']}></Ionicons>
        <View style={{ height: 50, width: 50, borderRadius: 20, overflow: 'hidden', backgroundColor: colors['dark-light'] }}>
          <BlurView style={{
            padding: 5,
            height: '100%'
          }}>
            <Image style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
              source={require('../../assets/avatar.jpg')}
            ></Image>
          </BlurView>
        </View>
      </View>

      <View style={{ marginTop: 25 }}>
        <View style={{ paddingLeft: 15 }}>
          <Text style={{ color: 'white', fontSize: 36, fontWeight: '800' }}>
            Find the best
          </Text>
          <Text style={{ color: 'white', fontSize: 36, fontWeight: '800' }}>
            coffee for you
          </Text>
        </View>
        <View style={{ padding: 25 }}>
          <Searchinput></Searchinput>
        </View>

        <View style = {{alignItems:'center'}}>
          <CategoryList></CategoryList>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.light,
  },
  textinput: {
    paddingLeft: 20,
    padding: 10,
    borderColor: 'white',
    borderRadius: 30,
    borderWidth: 1,
  }
})

export default HomeScreen