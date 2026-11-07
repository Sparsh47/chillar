import { Text, View } from "react-native";
import { AppLogo } from "@/components/ui/AppLogo";

type Props = {
  title?: string;
  subtitle?: string;
};

export function AuthHeader({
  title = "Welcome back.",
  subtitle = "Access your trips, group splits, and offline debts",
}: Props) {
  return (
    <View className="w-full mb-8">
      {/* App Logo */}
      <View className="items-start mb-6">
        <AppLogo width={140} height={44} />
      </View>

      {/* Headline */}
      <Text className="text-white text-3xl font-extrabold tracking-tight mb-2">
        {title}
      </Text>

      {/* Subtitle */}
      <Text className="text-white/60 text-base leading-relaxed">
        {subtitle}
      </Text>
    </View>
  );
}

