import { Button, Text, TextStyle, View, ViewStyle } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Info } from './Info'
const { Navigator, Screen } = createNativeStackNavigator()
import { center, text } from './styles'

export const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const Root = () => {
  return (
    <Navigator>
      <Screen name={'Home'} component={Home} />
      <Screen name={'Info'} component={Info} />
    </Navigator>
  )
}

const Home = () => {
  const navigation = useNavigation<any>()
  return (
    <View style={center}>
      <Text style={text}>Home</Text>
      <Button
        title="Navigate to Info"
        onPress={() => navigation.navigate('Info')}
      />
    </View>
  )
}