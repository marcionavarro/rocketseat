import { MaterialIcons } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  return <Stack screenOptions={{headerShown: false}}/>
}

