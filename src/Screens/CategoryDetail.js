import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import coffees from '../config/coffees';
import colors from '../config/colors';
import { BlurView } from 'expo-blur';
import ReadMoreText from '../components/ReadMoreText';

const CategoryDetail = ({ route, navigation }) => {
  const height = Dimensions.get('screen').height;
  const { id } = route.params;
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      {
        coffees.filter((item) => item.id === id).map((item) => (
          <View key={item.id}>
            <View>
              <View style={{ height: height / 2 + 10, position: 'relative' }}>
                <Image style={{ height: '100%', width: '100%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} source={item.image}>
                </Image>
                <TouchableOpacity style={{ position: 'absolute', left: 20, top: 30 }} onPress={() => navigation.navigate('Home')}>
                  <Ionicons name="arrow-back-circle" size={40} color={colors['white']} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', right: 20, top: 30 }}>
                  <Ionicons name="heart-circle" size={40} color={colors['white']} />
                </TouchableOpacity>
                <View
                  style={{ position: 'absolute', bottom: 0, width: '100%', height: 150, backgroundColor: '#000000', borderRadius: 10, opacity: 0.6, flexDirection: 'row', justifyContent: 'space-between' }}
                >
                  <View style={{ padding: 16 }}>
                    <Text style={{ color: 'white', fontSize: 22, fontWeight: '800', marginBottom: 5 }}>{item.name}</Text>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '800' }}>{item.included}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                      <Ionicons name="star" size={22} color="#D17842" />
                      <Text style={{ color: 'white', fontSize: 18, fontWeight: '800' }}>{item.rating}</Text>
                    </View>
                  </View>
                  <View style={{ padding: 16 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                      <View style={{ marginRight: 10, width: 50, height: 50, backgroundColor: colors['dark-light'], borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="cafe" size={24} color={colors.primary} />
                        <Text style={{ color: 'white' }}>Coffee</Text>
                      </View>
                      <View style={{ width: 50, height: 50, backgroundColor: colors['dark-light'], borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="water" size={24} color={colors.primary} />
                        <Text style={{ color: 'white' }}>Milk</Text>
                      </View>
                    </View>

                    <View style={{ width: 110, height: 30, backgroundColor: colors['dark-light'], borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                      <Text style={{ color: 'white', fontSize: 12, fontWeight: '600' }}>Medium Roasted</Text>
                    </View>
                  </View>
                </View>
                <View style = {{padding:15}}>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: colors.white , marginBottom:15 }}>Description</Text>
                  <ReadMoreText text={item.description} maxLength={80}></ReadMoreText>
                </View>
              </View>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default CategoryDetail