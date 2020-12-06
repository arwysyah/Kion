import React, {useState,useCallback} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {globalStyle, width, height} from './styles';
import FastImage from 'react-native-fast-image';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

const Gallery = ({navigation, route, gallery}) => {
  const [heightText, setHightText] = useState(false);
  const NUM_OF_LINES = 5;

  const onTextLayout = useCallback(e => {
    setHightText(e.nativeEvent.lines.length > NUM_OF_LINES);
  }, []);

  return (
    <SafeAreaView style={globalStyle.container}>
      <ScrollView style={{paddingRight: 15}}>
        {gallery.map((item, id) => {
          return (
            <View
              style={{
                // flexDirection: 'row',
                // justifyContent: 'space-around',
                paddingTop: 10,
                paddingLeft: 10,
                // paddingRight: 10,
                width: width,
              }}
              key={id}>
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
              <View style={{flexDirection:'row',justifyContent:'space-around',width:width/4.3,left:-10,top:3}}>
                <MaterialCommunity
                name='heart-outline'
                size={25}
                color='black'/>
                <MaterialCommunity
                name='comment-outline'
                size={25}
                color='black'/>
                
              </View>
              <View
                style={{
                  // height:heightText===true? 60:30,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingHorizontal: 20,
                  left: -20,
                  width: width * 0.94,
                  //  justifyContent:'center'
                }}>
                <Text style={[globalStyle.smallText, {fontWeight: 'bold'}]} 
               onTextLayout={onTextLayout} numberOfLines={NUM_OF_LINES}>
                 
                  {item.username}
                </Text>
                {/* <TouchableOpacity onPress={handleHightText}> */}
                  <Text
                    style={[globalStyle.smallText, {left: 6}]}
                  >
                    {item.information}
                  </Text>
                {/* </TouchableOpacity> */}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Gallery;
