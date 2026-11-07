import { AntDesign } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

type Props = {
  onPress?: () => void;
  disabled?: boolean;
};

export function GoogleButton({ onPress, disabled }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className="w-full flex-row items-center justify-center gap-3 border border-[#24242C] active:border-white/30 rounded-full py-4 px-6 bg-transparent"
    >
      <AntDesign name="google" size={18} color="#EA4335" />
      <Text className="text-white font-medium text-base">
        Continue with Google
      </Text>
    </Pressable>
  );
}

