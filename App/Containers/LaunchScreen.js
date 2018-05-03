import React, { Component } from 'react'
import { 
  ScrollView, 
  Text, 
  Image,
  View,  
  KeyboardAvoidingView,
  TouchableOpacity, 
  Alert
} from 'react-native';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "react-native-loading-spinner-overlay";

import { Colors } from "../Themes";
import { Images } from '../Themes'
import MyForm from '../Components/MyForm';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
  state = {};

  static defaultProps = {
    isFetching: false
  };

  constructor(props){
    super(props);
  }

  render () {
    return (
        <View styles={styles.Container}>
          <MyForm onSubmit={(values) => Alert.alert('Submitted!', JSON.stringify(values))} />
        </View>
     
    );
  }
}
