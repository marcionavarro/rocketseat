import { Link, router } from 'expo-router'
import { Alert, StyleSheet, Text, View } from 'react-native'

export default function SignUp() {
  function back() {
    if(!router.canGoBack()){
      return Alert.alert("Não é possivel voltar!")
    }
    router.back()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.back} onPress={back}>Voltar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  back: {
    fontSize: 16,
    fontWeight: "bold"
  }
})