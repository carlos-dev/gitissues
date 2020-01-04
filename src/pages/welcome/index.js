import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import api from '../../services/api';
import styles from './styles';

export default class Welcome extends Component {
  render() {
    return (
      <View>
        <Text> Welcome </Text>
      </View>
    );
  }
}
