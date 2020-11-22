import React, {memo} from 'react';
import {globalStyle} from '../components/color';
import {View, Text, Platform, TouchableOpacity,} from 'react-native';
import PropTypes from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({title,navigation}) => {
  return (
    <View style={globalStyle.header}>
      <TouchableOpacity
   
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name={Platform.OS === 'ios' ? 'arrow-left' : 'arrow-left'}
          size={25}
        />
      </TouchableOpacity>
      <View style={{flex: 1,top:-5}}>
  <Text style={globalStyle.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};
Header.propTypes = {
 title: PropTypes.string
};
export default memo(Header);
