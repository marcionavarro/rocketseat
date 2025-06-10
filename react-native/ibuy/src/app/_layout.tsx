import { Tabs } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"

export default function Layout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarLabelPosition: "beside-icon",
      tabBarInactiveTintColor: "#cecece",
      tabBarActiveTintColor: "#000"
      /* tabBarShowLabel: false */
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Sign In",
          tabBarIcon: ({ color }) => <MaterialIcons name="home" size={20} color={color} />
        }}
      />
      <Tabs.Screen
        name="sign-up"
        options={{
          tabBarLabel: "Sign Up",
          tabBarIcon: ({ color }) => <MaterialIcons name="person" size={20} color={color} />
        }}
      />
    </Tabs>
  )
}