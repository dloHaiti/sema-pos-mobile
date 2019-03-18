/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import RNLanguages from 'react-native-languages';
import i18n from './i18n';
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';
import PosApp from '../components/PosApp';
import PosStorage from '../database/PosStorage';

export default class App extends Component {
  async componentWillMount() {
    RNLanguages.addEventListener('change', this._onLanguagesChange);
    // Load the settings from what was saved the last time or get the default
    const savedSettings = await PosStorage.loadSettings() || PosStorage.getSettings();
    const uiLanguage = savedSettings.uiLanguage;
    console.log(`Setting UI Language: ${JSON.stringify(uiLanguage)}`);
    i18n.locale = uiLanguage.iso_code;
  }

  componentWillUnmount() {
    RNLanguages.removeEventListener('change', this._onLanguagesChange);
  }

  _onLanguagesChange = ({ language }) => {
    i18n.locale = language;
  };

  render() {
    return (
      <Provider store={store}>
        <PosApp />
      </Provider>
    );
  }
}

