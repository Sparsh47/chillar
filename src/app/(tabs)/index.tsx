import { router } from "expo-router";
import { useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ActiveGroupsSection } from "@/components/dashboard/ActiveGroupsSection";
import { BalanceOverviewCard } from "@/components/dashboard/BalanceOverviewCard";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { MOCK_BALANCE, MOCK_GROUPS } from "@/constants/dashboard";

export default function DashboardScreen() {
  const insets = useSafeAreaInsets();
  const [balance] = useState(MOCK_BALANCE);
  const [groups] = useState(MOCK_GROUPS);

  const handleSettleUp = () => {
    Alert.alert(
      "Settle Balances",
      "Pay your share of ₹645.00 instantly via UPI?",
      [
        { text: "Later", style: "cancel" },
        {
          text: "Pay with UPI",
          onPress: () => Alert.alert("UPI Intent", "Launching your UPI app..."),
        },
      ]
    );
  };

  const handleScanBill = () => {
    router.push("/(tabs)/bills" as never);
  };

  const handleCreateGroup = () => {
    Alert.alert("Create Group", "Enter a name for your new trip or hangout group.");
  };

  const handleOpenProfile = () => {
    router.push("/(auth)/profile" as never);
  };

  return (
    <View className="flex-1 bg-[#FAFAF9]">
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 24,
          paddingHorizontal: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Top Header with Brand, Profile Icon & Sync Status */}
        <DashboardHeader
          isSynced={true}
          onPressProfile={handleOpenProfile}
        />

        {/* Balance Overview Card (You are owed / You owe + Settle Up) */}
        <BalanceOverviewCard
          balance={balance}
          onPressSettleUp={handleSettleUp}
        />

        {/* Quick Action Buttons (Scan Bill & Create Group) */}
        <QuickActions
          onPressScan={handleScanBill}
          onPressCreateGroup={handleCreateGroup}
        />

        {/* Active Groups & Outings List */}
        <ActiveGroupsSection
          groups={groups}
        />
      </ScrollView>
    </View>
  );
}
