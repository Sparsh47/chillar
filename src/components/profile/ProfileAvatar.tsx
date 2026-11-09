import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  name: string;
  subtitle?: string;
  onPressEdit?: () => void;
};

export function ProfileAvatar({ name, subtitle, onPressEdit }: Props) {
  const getInitials = (text: string) => {
    return (
      text
        .split(" ")
        .map((part) => part[0])
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase() || "CH"
    );
  };

  return (
    <View className="items-center my-4">
      <View className="relative">
        <View className="w-24 h-24 rounded-full bg-rose-50 border-2 border-rose-200 items-center justify-center shadow-xs">
          <Text className="text-[#BE123C] text-2xl font-bold tracking-wider">
            {getInitials(name)}
          </Text>
        </View>

        <Pressable
          onPress={onPressEdit}
          className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#18181B] items-center justify-center shadow-sm active:bg-[#27272A]"
        >
          <Ionicons name="camera" size={15} color="#fff" />
        </Pressable>
      </View>

      <Text className="text-[#18181B] text-xl font-bold mt-3">
        {name || "Your Name"}
      </Text>

      {subtitle && (
        <Text className="text-zinc-500 text-xs mt-0.5 font-medium">{subtitle}</Text>
      )}
    </View>
  );
}
