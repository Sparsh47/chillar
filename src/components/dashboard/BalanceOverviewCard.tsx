import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import type { BalanceSummary } from "./types";

type Props = {
  balance: BalanceSummary;
  onPressSettleUp?: () => void;
};

export function BalanceOverviewCard({ balance, onPressSettleUp }: Props) {
  return (
    <View className="bg-white border border-[#EAEAE8] rounded-3xl p-5 mb-5 shadow-sm">
      <View className="flex-row">
        {/* Left Column: You are owed */}
        <View className="flex-1 pr-3">
          <Text className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-1.5">
            You are owed
          </Text>
          <Text className="text-emerald-600 font-extrabold text-[26px] tracking-tight">
            {balance.youAreOwed}
          </Text>
        </View>

        {/* Vertical divider */}
        <View className="w-[1px] bg-[#EAEAE8] my-1" />

        {/* Right Column: You owe (Warm Red accent) */}
        <View className="flex-1 pl-4">
          <Text className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-1.5">
            You owe
          </Text>
          <Text className="text-[#D9383A] font-extrabold text-[26px] tracking-tight mb-2.5">
            {balance.youOwe}
          </Text>

          {/* Settle Up Action Button */}
          <Pressable
            onPress={onPressSettleUp}
            className="flex-row items-center gap-1.5 self-start px-3 py-1.5 rounded-full border border-rose-200 bg-rose-50 active:bg-rose-100"
          >
            <Text className="text-[#BE123C] text-xs font-bold tracking-wide">
              Settle UP
            </Text>
            <Feather name="arrow-up-right" size={13} color="#BE123C" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
