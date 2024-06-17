import { Text, View } from 'react-native'
import { globalStyles } from './config/theme/app-theme'
import { DesingScreen } from './presentation/screens/DesingScreen'
import { FlexScreen } from './presentation/screens/FlexScreen'

export const App = () => {
  return (
    <View style={globalStyles.background}>
      <FlexScreen />
    </View>
  )
}