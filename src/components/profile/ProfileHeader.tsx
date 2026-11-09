import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { AppLogo } from "@/components/ui/AppLogo";

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
        className="w-10 h-10 items-center justify-center rounded-full bg-white border border-[#E4E4E7] active:bg-stone-50 shadow-xs"
      >
        <Ionicons name="chevron-back" size={20} color="#18181B" />
      </Pressable>

      <Text className="text-[#18181B] text-lg font-bold">{title}</Text>

      <View className="w-16 items-end">
        {rightAction ?? <AppLogo width={68} height={22} />}
      </View>
    </View>
  );
}
