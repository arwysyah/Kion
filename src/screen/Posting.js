import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import {
  globalStyle,
  width,
  height,
  spacing,
  white,
  arrayColor,
  backgroundColor,
  TOP,
} from '../components/styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

// import DismissKeyboard from '../components/keyboardDismiss';
export default function Posting({navigation}) {
  const maxLength = 10000;
  const [text, setText] = React.useState('');
  const [heights, setHeight] = React.useState(1.2);
  function countText() {
    let result = maxLength - text.length;
    if (result < 5) {
      return <Text style={{color: 'red'}}>{result}</Text>;
    } else {
      return <Text style={{color: 'green'}}>{result}</Text>;
    }
  }
  function clear(props) {
    setText('');
    Keyboard.dismiss();
    setHeight(1.2);
  }
  function seNewText(text) {
    setText(text);
    setHeight(1.8);
  }
  function close() {
    Keyboard.dismiss();
    setHeight(1.2);
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: backgroundColor}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={[globalStyle.backIconContainer, {top: TOP - spacing}]}>
        <MaterialCommunity name="arrow-left" size={25} color="black" />
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={close}>
        <View
          style={{
            flexDirection: 'row',
            left: width / 1.4,
            top: TOP - spacing,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={clear}
            style={[globalStyle.backIconContainer, {left: -spacing}]}>
            <MaterialCommunity name="trash-can" size={25} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              text !== ''
                ? navigation.navigate('Action', {text: text})
                : alert('Maaf anda harus menulis')
            }
            style={[globalStyle.backIconContainer, {left: 4 * spacing}]}>
            <MaterialCommunity
              name="arrow-right-bold-outline"
              size={25}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <TextInput
          editable={true}
          onChangeText={(texts) => seNewText(texts)}
          value={text}
          style={globalStyle.bigTextInput}
          multiline={true}
          textAlignVertical="top"
          maxLength={maxLength}
        />
        <Text style={{position: 'absolute', top: height / heights, right: 15}}>
          {countText()}
        </Text>
      </TouchableWithoutFeedback>
      {/* <ActionSheet/> */}
      {/* <ActionSheet/> */}
    </SafeAreaView>
  );
}
