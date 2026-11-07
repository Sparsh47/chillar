import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppLogo } from "@/components/ui/AppLogo";
import { Button } from "@/components/ui/Button";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top + 16, paddingBottom: insets.bottom + 16 }}
      className="flex-1 bg-[#0A0A0C] px-6 justify-between"
    >
      <View>
        {/* Top Header */}
        <View className="flex-row items-center justify-between mb-8">
          <AppLogo width={120} height={38} />
          <Pressable
            onPress={() => router.push("/(auth)/profile" as never)}
            className="w-10 h-10 rounded-full bg-[#1C1C22] border border-[#24242C] items-center justify-center active:opacity-70"
          >
            <Ionicons name="person-outline" size={18} color="#fff" />
          </Pressable>
        </View>

        {/* Offline Status Pill */}
        <View className="flex-row items-center gap-2 border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.02] self-start mb-6">
          <View className="w-2 h-2 rounded-full bg-emerald-400" />
          <Text className="text-white/60 text-xs">Offline-first • SQLite ready</Text>
        </View>

        {/* Headline */}
        <Text className="text-white text-3xl font-extrabold mb-2">
          Your Hangouts
        </Text>
        <Text className="text-white/50 text-base leading-relaxed mb-8">
          No group expenses yet. Tap below to create your first hangout or scan a bill.
        </Text>

        {/* Empty state card */}
        <View className="bg-[#121216] border border-[#24242C] rounded-2xl p-6 items-center justify-center">
          <View className="w-14 h-14 rounded-full bg-white/5 items-center justify-center mb-3">
            <Ionicons name="receipt-outline" size={28} color="rgba(255,255,255,0.6)" />
          </View>
          <Text className="text-white font-semibold text-base mb-1">
            Zero chaos, zero debt
          </Text>
          <Text className="text-white/40 text-xs text-center max-w-[220px]">
            Split receipts with friends nearby even when there's no internet.
          </Text>
        </View>
      </View>

      {/* Quick Action */}
      <View className="gap-3">
        <Button
          title="Profile & Settings"
          variant="secondary"
          leftIcon={<Ionicons name="settings-outline" size={18} color="#fff" />}
          onPress={() => router.push("/(auth)/profile" as never)}
          className="w-full"
        />
      </View>
    </View>
  );
}

