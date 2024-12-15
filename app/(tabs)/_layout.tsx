import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#D27842",
        tabBarInactiveTintColor: "#4E5053",
        tabBarStyle: {
          backgroundColor: "#0C0F14",
          borderColor: "#0C0F14",
          height: 56,
        },
        tabBarIconStyle: {
          height: 56,
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="wines"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="home" color={color} />
          ),
          tabBarShowLabel: true,
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="heart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons size={24} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
