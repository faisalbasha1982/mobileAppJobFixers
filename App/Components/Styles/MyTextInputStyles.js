import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics, Fonts } from "../../Themes/";

export default StyleSheet.create({
  input: {
    height: 30,
    padding: 5,
    backgroundColor: Colors.jbBackground
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginTop: 20,
    backgroundColor: Colors.jbBackground
  },
  valid: {
    borderColor: '#53E69D'
  },
  invalid: {
    borderColor: '#F55E64'
  }
});
