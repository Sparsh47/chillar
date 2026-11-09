import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  onPressScan?: () => void;
  onPressCreateGroup?: () => void;
};

export function QuickActions({ onPressScan, onPressCreateGroup }: Props) {
  return (
    <View className="flex-row items-center gap-3 w-full mb-7">
      {/* Primary: Scan Bill Button */}
      <Pressable
        onPress={onPressScan}
        className="flex-1 flex-row items-center justify-center gap-2 bg-[#18181B] rounded-2xl py-3.5 px-4 active:bg-[#27272A] shadow-sm"
      >
        <Ionicons name="camera" size={19} color="#fff" />
        <Text className="text-white font-bold text-base">Scan Bill</Text>
      </Pressable>

      {/* Secondary: Create Group Button */}
      <Pressable
        onPress={onPressCreateGroup}
        className="flex-1 flex-row items-center justify-center gap-1.5 bg-white border border-[#E4E4E7] rounded-2xl py-3.5 px-4 active:bg-stone-50 shadow-sm"
      >
        <Ionicons name="add" size={20} color="#18181B" />
        <Text className="text-[#18181B] font-semibold text-base">Create Group</Text>
      </Pressable>
    </View>
  );
}
