import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {globalStyle, width, height} from './styles';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

const Gallery = ({navigation, route, gallery}) => {
  const image = useSelector((state) => state.userByID);
  const {profilImage, username} = image;
  const [heightText, setHightText] = useState(false);
  const NUM_OF_LINES = 2;
  const [array, setArray] = useState([]);

  const onTextLayout = (e) => {
    setHightText(e.nativeEvent.lines.length > NUM_OF_LINES);
  };

  const handleChoose = (index) => {
    let newData = array.concat(index);
    setArray(newData);
  };

  function count() {}
  return (
    <SafeAreaView style={globalStyle.container}>
      <ScrollView style={{paddingRight: 15}}>
        {gallery.map((item, id) => {
          return (
            <View
              style={{
                // flexDirection: 'row',
                // justifyContent: 'space-around',
                paddingTop: 20,
                paddingLeft: 10,
                // paddingRight: 10,
                width: width,
              }}
              key={id}>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  width: 100,
                  alignItems: 'center',
                }}>
                <FastImage
                  style={{
                    height: 40,
                    width: 40,
                    paddingHorizontal: 20,
                    borderRadius: 40,
                  }}
                  source={{
                    uri: profilImage,
                    headers: {Authorization: 'StRSUJDJASDIouwebqmwbj'},
                    priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.cover}
                />
                <Text
                  style={[
                    globalStyle.commonText,
                    {color: 'black', fontWeight: 'bold'},
                  ]}>
                  {username} .
                </Text>
              </View>
              <View style={{height: 10}} />
              <FastImage
                style={{
                  height: height / 3,
                  width: width - 20,
                  paddingHorizontal: 20,
                }}
                source={{
                  uri: item.image,
                  headers: {Authorization: 'StRSUJDJASDIouwebqmwbj'},
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: 90,
                }}>
                <Text style={globalStyle.smallText}>Disukai</Text>
                <Text style={[globalStyle.smallText, {fontWeight: 'bold'}]}>
                  20000
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: width / 4.3,
                  left: -5,
                  top: 3,
                }}>
                <MaterialCommunity
                  name="heart-outline"
                  size={22}
                  color="black"
                />
                <MaterialCommunity
                  name="comment-outline"
                  size={22}
                  color="black"
                />
                <MaterialCommunity
                  name="dots-horizontal"
                  size={22}
                  color="black"
                />
              </View>

              <View
                style={{
                  // height:heightText===true? 60:30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingHorizontal: 20,
                  left: -20,
                  width: width*0.94,
                  top: 4,
                  //  justifyContent:'center'
                }}>
                <Text style={[globalStyle.smallText, {fontWeight: 'bold'}]}>
                  {item.username}
                </Text>
                {/* <TouchableOpacity onPress={handleHightText}> */}
                <TouchableOpacity onPress={() => handleChoose(id)}>
                  <Text
                    style={[globalStyle.smallText, {left: 6}]}
                    numberOfLines={!array.includes(id) ? NUM_OF_LINES : null}
                    onTextLayout={onTextLayout}>
                    {item.information}
                  </Text>
                </TouchableOpacity>
                {/* </TouchableOpacity> */}
              </View>
            </View>
          );
        })}
        <View style={{height: 40}} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default Gallery;
