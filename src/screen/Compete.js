import React from 'react';
import {SafeAreaView, View, Text,TouchableOpacity} from 'react-native';
import {globalStyle, TOP,spacing} from '../components/styles';
import TopAccount from '../components/topAccount';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'
import PropTypes from 'prop-types' 

const Compete = ({navigation,route}) => {
    const{topic}=route.params
  return (
    <SafeAreaView style={globalStyle.container}>
        <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          height: 2 * spacing,
          top:10
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[globalStyle.backIconContainer, {top: -spacing + 15}]}>
          <MaterialCommunity name="arrow-left" size={25} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={[globalStyle.titleWrite, {justifyContent: 'center'}]}>
            Tantangan
          </Text>
   
        </View>
      </View>
      <TopAccount topic={topic} />
    </SafeAreaView>
  );
};
Compete.propTypes={
    topic:PropTypes.string
}
export default Compete;
