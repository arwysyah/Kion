import React from 'react';
import {View, Text, TouchableHighlight, Alert,TouchableWithoutFeedback} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
export default function UploadButton() {

  return (
    <View style={{alignItems: 'center'}}>
      <View>
        <TouchableWithoutFeedback
 
        >
          <View
            style={{
              height: 62,
              backgroundColor: '#51db51',
              width: 62,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 31,
              top: -30,
              opacity:6
            }}>
            <FontAwesome name="plus" size={20} color="white" />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
