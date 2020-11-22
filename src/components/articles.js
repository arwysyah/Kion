import React, {memo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Card} from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import fireDB from '../../config/configs'
import {globalStyle,black} from '../components/color'

const {height, width} = Dimensions.get('window');
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;

// const config = {
//   apiKey: 'AIzaSyBjOs3ighmmnr0qEVOqNgm1XOpdaYqZIsc',
//   authDomain: 'kion-80d7f.firebaseapp.com',
//   databaseURL: 'https://kion-80d7f.firebaseio.com',
//   projectId: 'kion-80d7f',
//   storageBucket: 'kion-80d7f.appspot.com',
//   messagingSenderId: '193729941299',
//   appId: '1:193729941299:web:36751e5d1650b59f25f846',
//   measurementId: 'G-FPQ46620KV',
// };
// Initialize Firebase
// firebase.initializeApp(config);

const Articles = ({navigation, data, from}) => {
  const [pin, setPin] = React.useState(false);
  const [dot, setDots] = React.useState(false);
  const sendRequest = async () => {
    const ref = await fireDB.database().ref('/income');
    const idRequest = Math.floor(Math.random() * 10000000000000) + 1;
    ref
      .push({
        idRequest: 'zzzzz',

        status: 'waiting',
      })
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <SafeAreaView>
      {/* {load === false ? ( */}
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
                  style={globalStyle.cardContainer}>
                  <View
                    style={{
                      padding: spacing,
                      paddingRight: 50,
                      paddingLeft: 34,
                    }}>
                    <Text style={{color: 'black'}}>{item.category}</Text>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: 'bold',
                        top: 10,
                        fontFamily: 'SansitaSwashed-Light',
                      }}>
                      {item.title}
                    </Text>

                    <View style={{width: HEIGHT * 1.8}}></View>

                    <View style={{top: spacing * 3}}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Test')}>
                        <Text style={{color: 'black'}}>{item.author}</Text>
                        <Text style={{color: 'black', fontSize: 10}}>
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
                    {from !== 'profile' && (
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-evenly',
                          width: 90,
                          top: 6,
                        }}>
                        <TouchableOpacity onPress={() => sendRequest()}>
                          <MaterialCommunity
                            name="pin-outline"
                            size={20}
                            color={pin === false ? 'grey' : 'black'}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setDots(!dot)}>
                          <MaterialCommunity
                            name="dots-vertical"
                            size={20}
                            color={dot === false ? 'grey' : 'black'}
                          />
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </Card>
              </View>
            );
          }}
        />
      {/* ) : (
        <ActivityIndicator size="small" color="red" />
      )} */}
      <View style={{height: 60}} />
    </SafeAreaView>
  );
};
export default memo(Articles);
