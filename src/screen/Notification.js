import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, FlatList,Image} from 'react-native';
import {
  globalStyle,
  width,
  ITEM_HEIGHT,
  ITEM_WIDTH,
  TOP,
  spacing,

} from '../components/styles';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const Notification = ({navigation}) => {
  const data = [
    {
        img:require('../../assets/maudy.jpg'),
      id: '23',
      name: 'indah',
      status: 'menyukai foto anda',
      idPost: '123ss2',
      imgUrl:require('../../assets/maudy.jpg'),
    },
    {
        img:require('../../assets/maudy.jpg'),
      id: '123',
      name: 'indahs',
      status: 'menyukai foto anda',
      idPost: '1232sas',
      imgUrl:require('../../assets/maudy.jpg'),
    },
    {
        img:require('../../assets/maudy.jpg'),
      id: '1233',
      name: 'indahs',
      status: 'mulai mengikuti anda',
      imgUrl:require('../../assets/maudy.jpg'),
    },
  ];
  return (
    <View style={globalStyle.container}>
  
        <View style={[globalStyle.header,{justifyContent:'center'}]}>
          <TouchableOpacity
            onPress={() => navigation.jumpTo('Home')}
            style={[globalStyle.backIconContainer]}>
            <MaterialCommunity name="arrow-left" size={25} color="black" />
          </TouchableOpacity>
          <Text style={globalStyle.headerTitle}>Notifikasi</Text>
        </View>
        <View style={{height: 10}} />

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{alignItems: 'center'}}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  height: 50,
                
                  width: width ,
                  paddingHorizontal: 15,
                  alignItems:'center',
                  flexDirection:'row',
                  justifyContent:'space-between'
                  
                }}>
                    <View style={{height:40,alignItems:'center',borderRadius:40,width:40}}>
                    <Image style={globalStyle.smallLogo2}
                    source={item.img}/>
                    </View>
                <Text style={globalStyle.textUsual,{fontWeight:'800',fontStyle:'italic'}}>
                  {item.name} {item.status} 
                </Text>
                <Image style={{height:40,width:40,borderRadius:5}}
                    source={item.imgUrl}/>
              </View>
            );
          }}
        />
 
    </View>
  );
};
export default Notification;
