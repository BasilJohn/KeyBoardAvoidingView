import React from 'react';
import KeyboardCovering from './src/KeyboardCovering';
import KeyboardAvoidingView from './src/KeyboardAvoidingView';
import KeyboardAwareScrollView from './src/KeyboardAwareScrollView';
import KeyboardModule from './src/KeyboardModule';
import Combo from './src/Combo';

export default class App extends React.Component {
  render() {
    return (
         //<KeyboardCovering />
       <KeyboardAvoidingView />
       //<KeyboardAwareScrollView />
      //<KeyboardModule />
     //<Combo/>
    );
  }
}

