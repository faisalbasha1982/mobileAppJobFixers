import React, { Component } from 'react'
import { 
  ScrollView, 
  Text, 
  Image,
  Button,
  View,  
  KeyboardAvoidingView,
  TouchableOpacity, 
  Alert
} from 'react-native';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "react-native-loading-spinner-overlay";
import { Platform } from 'react-native';
import Aes from 'react-native-aes-crypto';
import LaunchScreen from './LaunchScreen';

const generateKey = (password, salt) => Aes.pbkdf2(password, salt);

const encrypt = (text, keyBase64) => {
    var ivBase64 = "1IX5ZjAes0MXvOtP";
    console.log(Aes.encrypt(text, keyBase64, ivBase64));
};

const decrypt = (encryptedData, key) => Aes.decrypt(encryptedData.cipher, key, encryptedData.iv);

export default class LaunchScreenAesEncrypt extends Component {

    constructor(props){
        super(props);
    }     

    state = {
        SecretKey: 'hello',
    }

    encrypt= () => {

        try {
            generateKey('Arnold', 'salt').then(key => {
                console.log('Key:', key);
                let e = encrypt("These violent delights have violent ends", key);
                console.log("encrypted text=",e);
            });
        } catch (e) {
            console.error(e);
        }

    }
    
    render() {

        return (

            <View style={{flex:1,flexDirection:'column',justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={ this.encrypt }><Text>Encrypt</Text></TouchableOpacity>
            </View>

        );

    }

}
