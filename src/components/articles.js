import React,{memo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import {Card} from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'firebase'
const {height, width} = Dimensions.get('window');
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;

const config= {
  apiKey: "AIzaSyBjOs3ighmmnr0qEVOqNgm1XOpdaYqZIsc",
  authDomain: "kion-80d7f.firebaseapp.com",
  databaseURL: "https://kion-80d7f.firebaseio.com",
  projectId: "kion-80d7f",
  storageBucket: "kion-80d7f.appspot.com",
  messagingSenderId: "193729941299",
  appId: "1:193729941299:web:36751e5d1650b59f25f846",
  measurementId: "G-FPQ46620KV"
};
  // Initialize Firebase
// firebase.initializeApp(config);

const Articles = ({navigation, data}) => {
  const [pin,setPin]=React.useState(false)
  const [dot,setDots]=React.useState(false)
  const sendRequest = async () => {
    const ref = await firebase.database().ref('/income');
    const idRequest = Math.floor(Math.random() * 10000000000000) + 1;
   
              ref
                .push({
                  idRequest: 'zzzzz',
                  
                  status: 'waiting',
                })
                .then(res => {
                  // console.log(res);
                })
                .catch(err => {
                  alert(err.message);
                })
         
 
  };
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.ids.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        bounces={false}
        scrollEventThrottle={60}
        decelerationRate={0}
        renderItem={({item, index}) => {
          return (
            <View style={{height: HEIGHT + 20, width}}>
              <Card
                style={{
                  backgroundColor: 'black',
                  opacity:0.8,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  height: HEIGHT,
                  borderRadius: 8,
                }}>
               
                <View
                  style={{padding: spacing, paddingRight: 50, paddingLeft: 34}}>
                  
                    <Text style={{color: 'white'}}>{item.category}</Text>
                    <Text
                      style={{
                        color: '#707371',
                        fontWeight: 'bold',
                        top: 10,
                        fontFamily: 'SansitaSwashed-Light',
                      }}>
                      {item.title}
                    </Text>
    
                  <View style={{width: HEIGHT * 1.8}}>
                  </View>
                  
                  <View style={{top: spacing * 3}}>
                  <TouchableOpacity onPress={()=>navigation.navigate('Test')}>
                    <Text style={{color: 'grey'}}>{item.author}</Text>
                    <Text style={{color: 'grey', fontSize: 10}}>
                      {item.date}
                    </Text>
                    </TouchableOpacity>
                  </View>
                </View>
               
                <View style={{alignItems: 'center', top: 20, left: -20}}>
                  <Image
                    source={require('../../assets/perahukertas.jpg')}
                    style={{height: 100, width: 60, borderRadius: 6}}
                  />
                  <View style={{flexDirection:'row',justifyContent:'space-evenly',width:90,top:6}}>
                    <TouchableOpacity onPress={()=>sendRequest()}>
                  <MaterialCommunity name="pin-outline" size={20} color={pin===false ? 'grey':'white'} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=>setDots(!dot)}>
                  <MaterialCommunity name="dots-vertical" size={20} color={dot===false? 'grey':'white'} />
                  </TouchableOpacity>
                  </View>
                 
                </View>
              </Card>
            </View>
          );
        }}
      />
     <View style={{height:60}}/>
    </SafeAreaView>
  );
};
export default memo(Articles);
