import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0A0A0C",
          borderTopColor: "#1C1C22",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "rgba(255, 255, 255, 0.4)",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Hangouts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="people-outline"
              size={size}
              color={typeof color === "string" ? color : "#fff"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
