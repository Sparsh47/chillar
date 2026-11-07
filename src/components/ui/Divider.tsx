import { Text, View } from "react-native";

type Props = {
  text?: string;
  className?: string;
};

export function Divider({ text, className = "" }: Props) {
  if (!text) {
    return <View className={`h-[1px] bg-[#24242C] w-full ${className}`} />;
  }

  return (
    <View className={`flex-row items-center w-full my-6 ${className}`}>
      <View className="flex-1 h-[1px] bg-[#24242C]" />
      <Text className="mx-4 text-white/40 text-xs font-medium">{text}</Text>
      <View className="flex-1 h-[1px] bg-[#24242C]" />
    </View>
  );
}

