import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import coffees from '../config/coffees';
import colors from '../config/colors';


const CategoryDetail = ({ route, navigation }) => {


  const height = Dimensions.get('screen').height;
  const { id } = route.params;

  const [buttonStateS, setButtonStateS] = useState(false);
  const [buttonStateM, setButtonStateM] = useState(false);
  const [buttonStateL, setButtonStateL] = useState(false);

  const handleButtonClick = (buttonName) => {
    if (buttonName === 'S') {
      setButtonStateS(true);
      setButtonStateM(false);
      setButtonStateL(false);
    } else if (buttonName === 'M') {
      setButtonStateS(false);
      setButtonStateM(true);
      setButtonStateL(false);
    } else if (buttonName === 'L') {
      setButtonStateS(false);
      setButtonStateM(false);
      setButtonStateL(true);
    }
  };



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
                  style={{ position: 'absolute', bottom: 0, width: '100%', height: 150, backgroundColor: '#000000', borderRadius: 10, opacity: 0.8, flexDirection: 'row', justifyContent: 'space-between' }}
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
                <View style={{ padding: 15 }}>
                  <Text style={{ fontSize: 16, fontWeight: '600', color: colors.white, marginBottom: 15 }}>Description</Text>
                  <Text style={{ fontSize: 16, color: 'white', lineHeight: 25 }}>{item.description}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <TouchableOpacity style={{ borderWidth: 2, borderColor: buttonStateS ? colors.primary : colors['dark-light'], width: 100, height: 40, backgroundColor: colors['dark-light'], alignItems: 'center', justifyContent: 'center', borderRadius: 15 }} onPress={() => handleButtonClick("S")}>
                    <Text style={{ color: buttonStateS ? colors.primary : 'white', fontWeight: 'bold' }}>S</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ borderWidth: 2, borderColor: buttonStateM ? colors.primary : colors['dark-light'], width: 100, height: 40, backgroundColor: colors['dark-light'], alignItems: 'center', justifyContent: 'center', borderRadius: 15 }} onPress={() => handleButtonClick("M")} >
                    <Text style={{ color: buttonStateM ? colors.primary : 'white', fontWeight: 'bold' }}>M</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ borderWidth: 2, borderColor: buttonStateL ? colors.primary : colors['dark-light'], width: 100, height: 40, backgroundColor: colors['dark-light'], alignItems: 'center', justifyContent: 'center', borderRadius: 15 }} onPress={() => handleButtonClick("L")}>
                    <Text style={{ color: buttonStateL ? colors.primary : 'white', fontWeight: 'bold' }}>L</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 70, paddingHorizontal: 15 }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: colors['white-smoke'], fontWeight: 'bold' }}>Price</Text>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ fontSize: 20, color: colors.primary, paddingRight: 5 }}>$</Text>
                      <Text style={{ fontSize: 20, color: colors.white }}>{item.price}</Text>
                    </View>

                  </View>
                  <TouchableOpacity style={{ width: 250, height: 60, backgroundColor: colors.primary, borderRadius: 20, alignItems: 'center', justifyContent: 'center', elevation: 5, shadowOpacity: 0.5, shadowColor: colors.primary, shadowRadius: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 22 }}>Buy Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))
      }
    </View >
  )
}

export default CategoryDetail