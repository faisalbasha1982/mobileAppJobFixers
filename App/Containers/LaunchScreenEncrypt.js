import { Platform } from 'react-native';
import Aes from 'react-native-aes-crypto';
import utf8 from 'utf8';
import base64 from 'base-64';
import React, { Component } from 'react';
import CryptoJS from 'crypto-js' ;
import mycrypt from 'js-rijndael';
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

import {NativeModules} from 'react-native';
var EncryptionModule=NativeModules.EncryptionModule

var PASSWORD='745r#x3g';
var KEY='wIEuw3kAGwVNl7BW';

const generateKey = (password, salt) => Aes.pbkdf2(password, salt);
const generateCryptoKey = (password,salt) => {    
    // var salt = CryptoJS.lib.WordArray.random(128/8);
    salt = '1234567812345678'
    var saltArray = salt.split('');
    return CryptoJS.PBKDF2(password, saltArray, { keySize: 256/8, iterations: 1000 });
}

const encrypt = (text, keyBase64,ivBase64) => Aes.encrypt(text, keyBase64, ivBase64)
                                                 .then( cipher => console.log('cipher=',cipher) )
                                                 .catch((error) => console.log(error));
const decrypt = (encryptedData, key) => Aes.decrypt(encryptedData.cipher, key, encryptedData.iv);

export default class LaunchScreenEncrypt extends Component {

    constructor(props){
        super(props);
    }     

    state = {
        SecretKey: 'hello',
    }

    rijndeal = () => {

        var key = [].slice.call(base64.toByteArray("IkhCeiVpeE44RUliVmJDL1FnVltWNVomJn44RSZ4UWU="));
        var iv = [].slice.call(base64.toByteArray("5DeaRfj4iHhBluFfyGDbPA=="));
        var message = [].slice.call(base64.toByteArray("8N6UX4G5c\/DCtELUOEE5jAdlkLvjBpFQGvo\/7fv3lrOfBUY\/Ze545d5k1C\/lA4zQ88rt52TB3Gz4egWJzerxZy41+sVSOrtLHrQR+Tv7NGfi+vSlZdmAsYVtHOHEPvImmkr+8k9hkKLlZELdY\/mq2t5INTqtmPwxufJB\/3LC+HPnnC0BGYxjvKIJ3jEBfzwcmOiyZG7iea\/BLIZwoH9lUzRe8cR+eVjlTig9NW\/tNMdkYBrxCXoK8XlNAXzjkgtq6c2Sd8keckHvEkYdSkie+ZaZvSwngCQgOKsiTs3jUJkedVnHM9VXLeUCocV17IldQxxghCK14hvLZ4WRCbtDHxMreCR3Rpwv11rWURpvmz0="));
        var clearText = String.fromCharCode.apply(this, mcrypt.decrypt(message, iv, key, cipher.cipher, cipher.mode));
 
        console.log(clearText);        

        encryptedByteArray = mcrypt.Encrypt(clearMessage, iv, key, mcrypt.cipher, mcrypt.CBC);

    }

    encryptAes = () => {

        var ivBase64 = "1234567812345678";

        try {
            generateKey("JS#236734", "JOBFIXERS@WLNOB%AES#09876").then(key => {
                console.log('Key:', key);
                encrypt("These violent delights have violent ends", key,ivBase64);
            });
        } catch (e) {
            console.error(e);
        }
    }

    encryptFunNew = () => {

         var key = generateCryptoKey("JS#236734","JOBFIXERS@WLNOB%AES#09876");
         console.log("key="+key);

    }

    encryptNewFun = () => {
        let data = "{'Lang': 'fr',  'AuthID': 'JS#236734','Data':'FormSignUp','D' : '2018-04-30 11:30:12' ,'R' : 'er3rss'} hello hello hello";

        // var key  = CryptoJS.enc.Latin1.parse('1234567812345678');
        // var iv   = CryptoJS.enc.Latin1.parse('1234567812345678');  

         var nkey  = CryptoJS.enc.Base64.parse('KZvpVyhoMoGxi25xn/TciA==');
         var iv    = CryptoJS.enc.Base64.parse('m5aDYFxxIUisuOlukx0VtQ==');

        var encrypted = CryptoJS.AES.encrypt(
          data,
          nkey,
          {keySize: 256/8, iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7
        });
        console.log('encrypted: ' + encrypted);
        //let encrypt = 'm5aDYFxxIUisuOlukx0VtYZTu9+Mtbih3ByZQTXSrWX4uBBfx25kSnw2h5hZJBqv';
        
        var decrypted = CryptoJS.AES.decrypt(encrypted,nkey,{keySize: 256/8,iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7});
        console.log('decrypted: '+decrypted.toString(CryptoJS.enc.Utf8));

    }

    encryptFun = () => {

        let SecretKey = '';
         generateKey("JS#236734","JOBFIXERS@WLNOB%AES#09876").then(
             key => {

                let data = "{'Lang': 'fr',  'AuthID': 'JS#236734','Data':'FormSignUp','D' : '2018-04-30 11:30:12' ,'R' : 'er3rss'}";

                // var key  = CryptoJS.enc.Latin1.parse('1234567812345678');
                // var iv   = CryptoJS.enc.Latin1.parse('1234567812345678');  
                console.log('generated key=',key);

                 var nkey  = CryptoJS.enc.Base64.parse(key);
                 var iv   = CryptoJS.enc.Base64.parse('1234567812345678');
        
                var encrypted = CryptoJS.AES.encrypt(
                  data,
                  nkey,
                  {iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.ZeroPadding
                });
                console.log('encrypted: ' + encrypted) ;
                //encrypted = 'EAAAAOETUOCqEtk/YEmzuRjbbB1ojjoR444zY0nXz4rfMR0RNJzgextXCgnQP/GMev7vTVp2pd5/NR1JcQYE1o64Bj4nhpIXIrSOUefe9U458Izq4r1D+1Z4EPQAqZIvwS0TMuB3kiUt+35ZjNmB4KknxeYm8GgzwhTS69ViXxxbvIrP';
                var decrypted = CryptoJS.AES.decrypt(encrypted,nkey,{iv:iv,padding:CryptoJS.pad.ZeroPadding});
                console.log('decrypted: '+decrypted.toString(CryptoJS.enc.Utf8));
        
            }
         );


        // var data = "plaintext";

        // let bytes = utf8.encode(data);
        // let encoded = base64.encode(bytes);

      }

    generate = () => {
        try {
            generateKey("JS#236734", "JOBFIXERS@WLNOB%AES#09876").then(key => {
                console.log('Key:', key);

                var ivBase64 = "IHRvIGRlY3J5cHQ=";
                Aes.encrypt('plaintext', key, ivBase64)
                       .then(cipher => console.log('cipher',cipher))
                       .catch(error => console.error(error));
                       

                // encrypt("These violent delights have violent ends", key).then(({cipher, iv}) => {
                //     console.log("Encrypted: ", cipher);
                    
                //     decrypt({ cipher, iv }, key).then(text => {
                //         console.log("Decrypted:", text);
                //     });
                    
                //     Aes.hmac256(cipher, key).then(hash => {
                //         console.log("HMAC", hash);
                //     });
                // });
            });
        } catch (e) {
            console.error(e);
        }

    }

    render() {    
        return (
                <View style={{flex:1, flexDirection: 'column',justifyContent:'center',alignItems:'center'}}>
                 <TouchableOpacity onPress={this.encryptNewFun}>
                    <Text>Button</Text>
                </TouchableOpacity> 
               
                </View>
        );
    }
  
}