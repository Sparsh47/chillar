import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import { AppLogo } from "@/components/ui/AppLogo";
import { StatusBadge } from "./StatusBadge";

type Props = {
  isSynced?: boolean;
  onPressStatus?: () => void;
  onPressProfile?: () => void;
};

export function DashboardHeader({
  isSynced = true,
  onPressStatus,
  onPressProfile,
}: Props) {
  return (
    <View className="flex-row items-center justify-between w-full mb-6">
      {/* Brand Logo */}
      <AppLogo width={96} height={30} />

      {/* Right side: Sync Status Badge + Circular Profile Icon */}
      <View className="flex-row items-center gap-2.5">
        <Pressable onPress={onPressStatus} className="active:opacity-80">
          <StatusBadge
            label={isSynced ? "Synced" : "Syncing..."}
            variant={isSynced ? "synced" : "neutral"}
          />
        </Pressable>

        {onPressProfile && (
          <Pressable
            onPress={onPressProfile}
            accessibilityLabel="Open Profile"
            className="w-9 h-9 rounded-full bg-white border border-[#E4E4E7] items-center justify-center active:bg-stone-50 shadow-sm"
          >
            <Ionicons name="person" size={15} color="#18181B" />
          </Pressable>
        )}
      </View>
    </View>
  );
}
