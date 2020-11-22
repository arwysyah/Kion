import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import {globalStyle, width, height, spacing, white} from '../components/color';
import Header from '../components/header';

// import DismissKeyboard from '../components/keyboardDismiss';
export default function Posting({navigation}) {
  const maxLength = 1000;
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
  function clear() {
    setText('');
    Keyboard.dismiss();
    setHeight(1.2);
  }
  function seNewText(text) {
    setText(text);
    setHeight(1.8);
  }
  return (
    <View style={globalStyle.container}>
      <Header navigation={navigation} title={'Menulis'} />
      <View style={{flexDirection: 'row', left: width / 1.4, top: spacing / 2}}>
        <TouchableOpacity onPress={clear}>
          <Text
            style={{
              fontWeight: 'bold',
              justifyContent: 'space-between',
              color: 'grey',
            }}>
            CLEAR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontWeight: 'bold', left: spacing, color: '#6bc200'}}>
            NEXT
          </Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        //   style={styles.container}
      >
        <TextInput
          editable={true}
          onChangeText={(texts) => seNewText(texts)}
          value={text}
          style={{
            height: height,
            backgroundColor: white,
            borderColor: 'green',
            top: height / 30,
            paddingLeft: spacing,
            paddingRight: spacing,
          }}
          multiline={true}
          textAlignVertical="top"
          maxLength={maxLength}
        />
        <Text style={{position: 'absolute', top: height / heights, right: 15}}>
          {countText()}
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
}
