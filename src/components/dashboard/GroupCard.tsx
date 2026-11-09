import { Pressable, Text, View } from "react-native";
import { AvatarStack } from "./AvatarStack";
import { StatusBadge } from "./StatusBadge";
import type { GroupItem } from "./types";

type Props = {
  item: GroupItem;
  onPress?: () => void;
};

export function GroupCard({ item, onPress }: Props) {
  const progressPercent = item.budget
    ? Math.min(Math.round((item.budget.spent / item.budget.total) * 100), 100)
    : 0;

  return (
    <Pressable
      onPress={onPress}
      className="bg-white border border-[#EAEAE8] active:border-stone-300 rounded-3xl p-4 mb-3 shadow-xs"
    >
      {/* Top Row: Title + Type & Avatar Stack */}
      <View className="flex-row items-start justify-between">
        <View className="flex-1 pr-3">
          <Text className="text-[#18181B] font-bold text-base leading-snug mb-0.5">
            {item.title}
          </Text>
          <Text className="text-zinc-500 text-xs">{item.subtitle}</Text>
        </View>

        {item.members && item.members.length > 0 && (
          <AvatarStack members={item.members} />
        )}
      </View>

      {/* Progress Bar Variant (e.g. Trips with budget) */}
      {item.budget && (
        <View className="mt-4">
          <View className="w-full h-2 bg-stone-100 rounded-full overflow-hidden mb-2">
            <View
              style={{ width: `${progressPercent}%` }}
              className="h-full bg-[#D9383A] rounded-full"
            />
          </View>

          <Text className="text-zinc-500 text-xs text-right font-medium">
            ₹{item.budget.spent.toLocaleString()} / ₹
            {item.budget.total.toLocaleString()} spent
          </Text>
        </View>
      )}

      {/* Status & Amount Variant (e.g. Settled / Pending groups) */}
      {item.status && (
        <View className="flex-row items-center justify-between mt-4 pt-1">
          <StatusBadge
            label={item.status.label}
            variant={
              item.status.label.includes("pending")
                ? "accent"
                : item.status.variant
            }
          />

          {item.amount && (
            <Text className="text-[#18181B] font-bold text-base tracking-tight">
              {item.amount}
            </Text>
          )}
        </View>
      )}
    </Pressable>
  );
}
