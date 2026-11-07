import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

type Props = {
  title?: string;
  onBack?: () => void;
  rightAction?: React.ReactNode;
};

export function ProfileHeader({
  title = "Profile",
  onBack,
  rightAction,
}: Props) {
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View className="flex-row items-center justify-between py-3 mb-4">
      <Pressable
        onPress={handleBack}
        className="w-10 h-10 items-center justify-center rounded-full bg-[#141418] border border-[#24242C] active:opacity-70"
      >
        <Ionicons name="chevron-back" size={20} color="#fff" />
      </Pressable>

      <Text className="text-white text-lg font-bold">{title}</Text>

      <View className="w-10 items-end">{rightAction ?? <View className="w-10" />}</View>
    </View>
  );
}

