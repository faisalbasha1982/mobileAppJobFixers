import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import LaunchScreenNew from '../Containers/LaunchScreenNew'
import LaunchScreenForm from '../Containers/LaunchScreenForm'
import LaunchScreenEncrypt from '../Containers/LaunchScreenEncrypt'
import LaunchScreenAesEncrypt from '../Containers/LaunchScreenAesEncrypt'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LaunchScreenNew: { screen: LaunchScreenNew },
  LaunchScreenForm: { screen: LaunchScreenForm },
  LaunchScreenEncrypt: { screen: LaunchScreenEncrypt},
  LaunchScreenAesEncrypt: { screen: LaunchScreenAesEncrypt },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreenForm',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
