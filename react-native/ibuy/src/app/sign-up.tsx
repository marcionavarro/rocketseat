import { Link } from 'expo-router'
import { StyleSheet, View } from 'react-native'

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Link href="/" style={styles.back}>Voltar</Link>
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