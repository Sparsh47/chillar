import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  name: string;
  subtitle?: string;
  onPressEdit?: () => void;
};

export function ProfileAvatar({ name, subtitle, onPressEdit }: Props) {
  const getInitials = (text: string) => {
    return text
      .split(" ")
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase() || "CH";
  };

  return (
    <View className="items-center my-4">
      <View className="relative">
        <View className="w-24 h-24 rounded-full bg-gradient-to-tr bg-[#1C1C22] border-2 border-emerald-500/40 items-center justify-center shadow-lg">
          <Text className="text-white text-2xl font-bold tracking-wider">
            {getInitials(name)}
          </Text>
        </View>

        <Pressable
          onPress={onPressEdit}
          className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-white items-center justify-center shadow-md active:opacity-80"
        >
          <Ionicons name="camera" size={16} color="#000" />
        </Pressable>
      </View>

      <Text className="text-white text-xl font-bold mt-3">
        {name || "Your Name"}
      </Text>

      {subtitle && (
        <Text className="text-white/50 text-xs mt-0.5">{subtitle}</Text>
      )}
    </View>
  );
}

