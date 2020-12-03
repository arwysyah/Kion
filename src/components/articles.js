import React, {memo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment'
import {globalStyle, black, width} from './styles';
import PropTypes from 'prop-types';
moment.locale('en')
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;

const Articles = ({navigation, data, from, routes}) => {
  
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
            <View style={{height: HEIGHT+3, width: width}}>
              <View style={globalStyle.cardContainer}>
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
                      }}
                      numberOfLines={1}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>

                  <View style={{width: HEIGHT * 1.8}}></View>

                  <View style={{top: spacing * 3}}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Test', {
                          routes,
                        })
                      }>
                      <Text style={{color: 'black'}}>{item.username}</Text>
                      <Text style={{color: 'black', fontSize: 10}}>
                      {moment(item.createdAt).format('LL')}
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
                      <TouchableOpacity onPress={() => handleArchived()}>
                        <MaterialCommunity
                          name="pin-outline"
                          size={20}
                          // color={pin === false ? 'grey' : 'black'}
                        />
                      </TouchableOpacity>
                      {/* <TouchableOpacity onPress={() => setDots(!dot)}>
                        <MaterialCommunity
                          name="dots-vertical"
                          size={20}
                          color={dot === false ? 'grey' : 'black'}
                        />
                      </TouchableOpacity> */}
                    </View>
                  )}
                </View>
              </View>
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
  navigation: PropTypes.shape({}),
  data: PropTypes.array,
};
export default memo(Articles);
