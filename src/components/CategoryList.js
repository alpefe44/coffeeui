import { View, Text, FlatList, TouchableOpacity, Image, useWindowDimensions, Dimensions } from 'react-native'
import React, { useState } from 'react'
import categories from '../config/categories'
import colors from '../config/colors';
import { BlurView } from 'expo-blur';
import coffees from '../config/coffees';
import Ionicons from '@expo/vector-icons/Ionicons';

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
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {
              selectCategory === item.categoryId ?
                <View style={{ borderRadius: 35, width: width / 2 - 20, marginTop: 18, marginLeft: 15, backgroundColor: colors.dark, }}>
                  <BlurView
                    intensity={10}
                    style={{
                      height: 'auto',
                      padding: 15,
                    }}
                  >
                    <TouchableOpacity style={{ height: 150, position: 'relative' }}>
                      <Image style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 20
                      }} source={item.image}>
                      </Image>
                      <View style={{ alignItems:'center',position: 'absolute', right: 0, top: 0, width: 50, height: 25, backgroundColor: 'rgba(52, 52, 52, 0.8)', borderTopRightRadius:10,borderBottomLeftRadius: 15, borderTopLeftRadius: 4 }}>
                        <View style = {{flexDirection:'row'}}>
                          <Ionicons name="star" size={16} color="#D17842" />
                          <Text style = {{marginLeft:2,color:colors.white , fontWeight:'700'}}>{item.rating}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>

                    <View style={{ marginTop: 6 }}>
                      <Text style={{ fontSize: 18, color: colors.white, marginBottom: 5 }}>{item.name}</Text>
                      <Text style={{ fontSize: 13, color: colors.white }}>{item.included}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginRight: 3, fontSize: 24, color: colors.primary }}>$</Text>
                        <Text style={{ fontSize: 24, color: colors.white }}>{item.price}</Text>
                      </View>
                      <TouchableOpacity>
                        <Ionicons name="md-add-circle-sharp" size={32} color="#D17842" />
                      </TouchableOpacity>
                    </View>

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