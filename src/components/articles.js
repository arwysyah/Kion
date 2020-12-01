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
import fireDB from '../../config/configs';
import {globalStyle, black, width, height} from './styles';
import PropTypes from 'prop-types';

const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;

const Articles = ({navigation, data, from, routes}) => {
  const [pin, setPin] = React.useState(false);
  const [dot, setDots] = React.useState(false);
  // const sendRequest = async () => {
  //   const ref = await fireDB.database().ref('/income');
  //   const idRequest = Math.floor(Math.random() * 10000000000000) + 1;
  //   ref
  //     .push({
  //       idRequest: 'zzzzz',

  //       status: 'waiting',
  //     })
  //     .then((res) => {
  //       // console.log(res);
  //     })
  //     .catch((err) => {
  //       alert(err.message);
  //     });
  // };
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item) => item.ids.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        bounces={false}
        scrollEventThrottle={60}
        decelerationRate={0}
        renderItem={({item, index}) => {
          return (
            <View style={{height: HEIGHT + 20, width: width - 20}}>
              <Card style={globalStyle.cardContainer}>
                <View
                  style={{
                    padding: spacing,
                    paddingRight: 50,
                    paddingLeft: 34,
                  }}>
                     <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Test', {
                          routes,
                        })
                      }>
                       <Text style={{color: black}}>{item.category}</Text>
                  <Text
                    style={{
                      color: black,
                      fontWeight: 'bold',
                      top: 10,
                      fontFamily: 'SansitaSwashed-Light',
                    }}>
                    {item.title}
                  </Text>
                  </TouchableOpacity>

                  <View style={{width: HEIGHT * 1.8}}>
                    
                  </View>

                  <View style={{top: spacing * 3}}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Test', {
                          routes,
                        })
                      }>
                             
                      <Text style={{color: 'black'}}>{item.username}</Text>
                      <Text style={{color: 'black', fontSize: 10}}>
                     {new Date(item.createdAt).toString()}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={{alignItems: 'center', top: 20, left: -20}}>
                <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Test', {
                          routes,
                        })
                      }>
                  <Image
                    source={
                      item.urlImage === ''
                        ? require('../../assets/perahukertas.jpg')
                        : {uri: item.urlImage}
                    }
                    style={{height: 100, width: 60, borderRadius: 6}}
                  />
                      </TouchableOpacity>
                  {from !== 'Profile' && (
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
      {/* <View style={{height: 40}} /> */}
    </SafeAreaView>
  );
};
Articles.propTypes = {
  route: PropTypes.string,
  navigation: PropTypes.shape({}).isRequired,
  data: PropTypes.array,
};
export default memo(Articles);
