import { Text, View } from "react-native";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function ProfileSection({ title, children, className = "" }: Props) {
  return (
    <View className={`w-full mb-6 ${className}`}>
      <Text className="text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-2.5 px-1">
        {title}
      </Text>
      <View className="bg-white border border-[#EAEAE8] rounded-3xl p-4 gap-4 shadow-xs">
        {children}
      </View>
    </View>
  );
}
