import { View, Text, FlatList, TouchableOpacity, Image, useWindowDimensions, Dimensions } from 'react-native'
import React, { useState } from 'react'
import categories from '../config/categories'
import colors from '../config/colors';
import { BlurView } from 'expo-blur';
import coffees from '../config/coffees';

const CategoryList = () => {

  const width = Dimensions.get('screen').width;
  const [selectCategory, setSelectCategory] = useState(0);

  return (
    <>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={
          ({ item }) => (
            <TouchableOpacity style={{ paddingHorizontal: 15 }} onPress={() => setSelectCategory(item.id)}>
              {
                selectCategory === item.id ? <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{item.name}</Text>
                  : <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
              }

            </TouchableOpacity>
          )
        }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
      </FlatList>
      <FlatList
        data={coffees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style = {{justifyContent:'center' , alignItems:'center'}}>
            {
              selectCategory === item.categoryId ?
                <View style={{ width: width / 2 - 20, marginTop: 18 , marginLeft:15 , backgroundColor:colors.dark ,}}>
                  <BlurView
                    intensity={30}       
                    style={{
                      height:300,
                      padding:15,
                    }}
                  >
                    <TouchableOpacity style={{ height: 150 }}>
                      <Image style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20
                      }} source={item.image}>

                      </Image>
                    </TouchableOpacity>
                  </BlurView>
                </View> : <Text></Text>

            }

          </View>



        )}
        horizontal
        pagingEnabled

      >

      </FlatList >

    </>
  )
}

export default CategoryList