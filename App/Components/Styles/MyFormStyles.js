import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, Metrics, Fonts } from "../../Themes/";

export default StyleSheet.create({
  container: {
    padding: 45,
    backgroundColor: Colors.jbBackground,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 1
  },
  formSubmit: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 25,
    padding: 5,
    backgroundColor: Colors.jbBackground,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1

  }
});
