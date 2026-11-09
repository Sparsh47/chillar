import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: "#EAEAE8",
          borderTopWidth: 1,
          height: 64,
          paddingBottom: 8,
          paddingTop: 8,
          elevation: 0,
        },
        tabBarActiveTintColor: "#D9383A",
        tabBarInactiveTintColor: "#A1A1AA",
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center">
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={21}
                color={(color as string) || "#D9383A"}
              />
              {focused && (
                <View className="w-1 h-1 rounded-full bg-[#D9383A] mt-1" />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="groups"
        options={{
          title: "Groups",
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center">
              <Ionicons
                name={focused ? "people" : "people-outline"}
                size={22}
                color={(color as string) || "#D9383A"}
              />
              {focused && (
                <View className="w-1 h-1 rounded-full bg-[#D9383A] mt-1" />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{
          title: "Bills",
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center">
              <Ionicons
                name={focused ? "receipt" : "receipt-outline"}
                size={21}
                color={(color as string) || "#D9383A"}
              />
              {focused && (
                <View className="w-1 h-1 rounded-full bg-[#D9383A] mt-1" />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: "Activity",
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center">
              <Ionicons
                name={focused ? "list" : "list-outline"}
                size={21}
                color={(color as string) || "#D9383A"}
              />
              {focused && (
                <View className="w-1 h-1 rounded-full bg-[#D9383A] mt-1" />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
