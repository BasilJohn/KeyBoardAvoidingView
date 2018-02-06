import React from 'react';
import { View, TextInput, Image, KeyboardAvoidingView,Text } from 'react-native';
import styles from './styles';
import logo from './logo.png';
import ImageButton from '../src/ImageButton';

const Demo = () => {
  return (
    <View style={{flex:1,backgroundColor:'#4c69a5',alignItems:'center'}}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
        >
      <Image source={logo} style={styles.logo} />
      <View >
         <Text>
            TITLE
          </Text>
          <View >
          <TextInput style={styles.input}
              placeholder='Sell somethings'
              underlineColorAndroid='transparent'
            />
        </View>
        <Text>
            Description
          </Text>
          <View >
          <TextInput style={styles.multiLineinput}
              placeholder='Sell somethings'
              underlineColorAndroid='transparent'
              multiline={true}
              numberOfLines={5}
            />
        </View>
      </View>
     
     <View style={{ height: 80 }} />
    </KeyboardAvoidingView>
    <View style={styles.introPageButtonBox}>
    <View style={styles.introPageButton} />
    <View style={styles.introPageButton}>
        <ImageButton
              style={styles.nextButton}
              styleImage={styles.nextButton}
              appearance={{
                normal: require("../src/assets/img/next.png"),
                highlight: require("../src/assets/img/next.png")
              }}
              //onPress={this._handleClickNextButton.bind(this)}
            />
        </View>
        </View>
    </View>
    
  );
};

export default Demo;
