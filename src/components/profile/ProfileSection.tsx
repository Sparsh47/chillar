import { Text, View } from "react-native";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function ProfileSection({ title, children, className = "" }: Props) {
  return (
    <View className={`w-full mb-6 ${className}`}>
      <Text className="text-white/40 text-xs font-semibold tracking-wider uppercase mb-3 px-1">
        {title}
      </Text>
      <View className="bg-[#121216] border border-[#24242C] rounded-2xl p-4 gap-4">
        {children}
      </View>
    </View>
  );
}

