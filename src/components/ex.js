import React, { useState,useRef } from 'react';
import {View, Text, TouchableOpacity,Animated} from 'react-native';
import {globalStyle, width, height} from './styles';

const exSlide = () => {
    const [active,setActive]=useState(0)
    const [xTabOne,setTabOne]=useState(0)
    const [xTabTwo,setTabTwo]=useState(0)
    const [xTabThree, setTabThree] = useState(0);
    const translateX=useRef(new Animated.Value(0)).current

    const handleSlide=(type)=>{
        Animated.spring(translateX,{
            toValue:type,
            duration:100,
            useNativeDriver:true
        }).start()

    }
  return (
    <View style={{flex: 1}}>
      <View style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 20,
            height: 36,
            position: 'relative',
          }}>
          <Animated.View
            style={{
              position: 'absolute',
              width: '50%',
              height: '100%',
              top: 0,
              left: 0,
              backgroundColor: '#007aff',
              transform:[{
                  translateX
              }]
            }}
          />
          <TouchableOpacity
          onLayout={event=>setTabOne(event.nativeEvent.layout.x)}
          onPress={()=>setActive(0),()=>handleSlide(xTabOne)}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#007aff',
              borderRightWidth: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderRadius: 4,
            }}>
            <Text>Tab One</Text>
          </TouchableOpacity>
          <TouchableOpacity
           onLayout={event=>setTabTwo(event.nativeEvent.layout.x)}
           onPress={()=>setActive(1),()=>handleSlide(xTabTwo)}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#007aff',
              borderLeftWidth: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderRadius: 4,
            }}>
            <Text>Tab Two</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default exSlide;


import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {globalStyle, width, height} from './styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunity);
const HeaderSlide = () => {
  const [active, setActive] = useState(0);
  const [xTabOne, setTabOne] = useState(0);
  const [xTabTwo, setTabTwo] = useState(0);
  const [xTabThree, setTabThree] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  const handleSlide = (type) => {
      console.log(xTabOne,xTabTwo,xTabThree,'ss')
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={globalStyle.container}>
      <View style={{width: width*0.95, marginLeft: 'auto', marginRight: 'auto'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 20,
            height: 36,
            position: 'relative',
          }}>
          <Animated.View
            style={{
              position: 'absolute',
              width: (width*0.95)/3,
              height: '100%',
              top: 0,
              left: 0,
              backgroundColor: '#007aff',
              transform: [
                {
                  translateX,
                },
              ],
            }}
          />
          <TouchableOpacity
            onLayout={(event) => setTabOne(event.nativeEvent.layout.x)}
            onPress={(() => setActive(0), () => handleSlide(xTabOne))}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#007aff',
              borderRightWidth: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderRadius: 4,
            }}>
            <MaterialCommunity
              name="google-photos"
              clipboard-list
              color="black"
              size={21}
            />
               <Text style={{fontSize:10}}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onLayout={(event) => setTabTwo(event.nativeEvent.layout.x)}
            onPress={(() => setActive(1), () => handleSlide(xTabTwo/2))}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#007aff',
              borderLeftWidth: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderRadius: 4,
            }}>
            <MaterialCommunity name="clipboard-list" color="black" size={21} />
            <Text style={{fontSize:10}}>Listing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onLayout={(event) => setTabThree(event.nativeEvent.layout.x)}
            onPress={(() => setActive(2), () => handleSlide(xTabThree/3))}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#007aff',
              borderLeftWidth: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderRadius: 4,
            }}>
            <MaterialCommunity name="comment-question" color="black" size={21} />
            <Text style={{fontSize:10}}>Question</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderSlide;



import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import {globalStyle, width, height} from './styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
const AnimatedIcon = Animated.createAnimatedComponent(MaterialCommunity);
const HeaderSlide = () => {
  const [active, setActive] = useState(0);
  const [xTabOne, setTabOne] = useState(0);
  const [xTabTwo, setTabTwo] = useState(0);
  const [xTabThree, setTabThree] = useState(0);
  const translateX = useState(new Animated.Value(0))[0];

  const handleSlide = (type) => {
    Animated.spring(translateX, {
      toValue: type,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
//  const handleChange=()=>{
//     setActive(1),()=>handleSlide(xTabTwo)
//  }
//  const handleChanges=()=>{
//     setActive(0),handleSlide(xTabOne)
//  }
function handleChange(type,tab){
setActive(type),handleSlide(tab)
}
  return (
    <View style={globalStyle.container}>
      <View style={{width: width*0.95, marginLeft: 'auto', marginRight: 'auto'}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            marginBottom: 20,
            height: 36,
            position: 'relative',
          }}>
          <Animated.View
            style={{
              position: 'absolute',
              width: (width*0.95)/2,
              height: '100%',
              top: 0,
              left: 0,
              backgroundColor: '#007aff',
              borderRadius: 10,
              transform: [
                {
                  translateX,
                },
              ],
            }}
          />
          <TouchableOpacity
            onLayout={(event) => setTabOne(event.nativeEvent.layout.x)}
            onPress={()=>handleChange(0,xTabOne)}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#007aff',
              borderRightWidth: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderRadius: 4,
            }}>
            <MaterialCommunity
              name="google-photos"
              clipboard-list
              color={active===0? '#FFF':'black'}
              size={21}
            />
               <Text style={{fontSize:10,color:active===0? '#FFF':'black',fontWeight:active===0? 'bold':'normal'}}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onLayout={(event) => setTabTwo(event.nativeEvent.layout.x)}
            onPress={() => handleChange(1,xTabTwo)}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#007aff',
              borderLeftWidth: 0,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderRadius: 4,
            }}>
            <MaterialCommunity name="clipboard-list" color={active===1? '#FFF':'black'} size={21} />
            <Text style={{fontSize:10,color:active===1? '#FFF':'black',fontWeight:active===1? 'bold':'normal'}}>Listing</Text>
          </TouchableOpacity>
        
        </View>
      </View>
    </View>
  );
};

export default HeaderSlide;


import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import University from '../screen/ContentScreen/University';
import Challange from '../screen/ContentScreen/University';
import Science from '../screen/ContentScreen/Science';
import Technology from '../screen/ContentScreen/Technology';
import Story from '../screen/ContentScreen/Story';
import Scholarship from '../screen/ContentScreen/Scholarship';
import Internship from '../screen/ContentScreen/Internship';
import All from '../screen/ContentScreen/All';
import {
  TouchableWithoutFeedback,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {height, TOP, width, globalStyle} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export default function TopButton({navigation}) {
  return (
    <>
      <View style={globalStyle.topButtonHeader}>
        <TouchableOpacity
          style={[globalStyle.backIconContainer, {height: 30, width: 30}]}
          onPress={() => navigation.goBack()}>
          <MaterialCommunity color="black" name="arrow-back" size={25} />
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Test')}>
          <View style={[globalStyle.topButtonHeader, {left: 20}]}>
            <View style={globalStyle.smallLogo}>
              <Image
                source={require('../../assets/logoButton.png')}
                style={{height: 30, width: 30}}
              />
            </View>
            <View
              style={{
                width: width * 0.6,
                borderWidth: 0.5,
                borderColor: 'grey',
                height: TOP * 1.2,
                backgroundColor: 'white',
                borderRadius: 5,
              }}
            />
            <MaterialCommunity
              style={{left: 10}}
              color="black"
              name="search"
              size={28}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Tab.Navigator
        initialRouteName="All"
        backBehavior="All"
        // tabBarOptions={
        //   ({
        //     style: {
        //       backgroundColor: '#2b2929',
        //     },
        //   },
        //   {
        //     lazy: true,
        //     scrollEnabled: true,
        //   })
        // }

        scrollEnabled={true}
        springConfig={{
          restSpeedThreshold: 60,
        }}
        tabBarOptions={
          ({
            labelStyle: {fontSize: 12, color: 'grey'},
            tabStyle: {width: 110},
            style: {backgroundColor: 'white'},
          },
          {
            lazy: true,
            scrollEnabled: true,
          })
        }>
        <Tab.Screen name="Semua" component={All} />
        <Tab.Screen name="Universitas" component={University} />
        <Tab.Screen name="Cerita" component={Story} />
        <Tab.Screen name="Teknologi" component={Technology} />
        <Tab.Screen name="Sains" component={Science} />
        <Tab.Screen name="Beasiswa" component={Scholarship} />
        <Tab.Screen name="Internship" component={Internship} />
      </Tab.Navigator>
    </>
  );
}
