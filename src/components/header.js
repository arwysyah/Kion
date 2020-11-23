import React, {memo} from 'react';
import {globalStyle, arrayColor} from '../components/color';
import {View, Text, Platform, TouchableOpacity, SafeAreaView,} from 'react-native';
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const Header = ({title,navigation}) => {
  return (
    <SafeAreaView style={globalStyle.header} >
      <TouchableOpacity
      style={globalStyle.backIconContainer}
   
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name={Platform.OS === 'ios' ? 'arrow-left' : 'arrow-left'}
          size={25}
        />
      </TouchableOpacity>
      <View style={{flex: 1,top:-5}}>
  <Text style={globalStyle.headerTitle}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};
Header.propTypes = {
 title: PropTypes.string
};
export default memo(Header);
