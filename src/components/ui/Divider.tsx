import { Text, View } from "react-native";

type Props = {
  text?: string;
  className?: string;
};

export function Divider({ text, className = "" }: Props) {
  if (!text) {
    return <View className={`h-[1px] bg-[#E4E4E7] w-full ${className}`} />;
  }

  return (
    <View className={`flex-row items-center w-full my-6 ${className}`}>
      <View className="flex-1 h-[1px] bg-[#E4E4E7]" />
      <Text className="mx-4 text-zinc-400 text-xs font-medium">{text}</Text>
      <View className="flex-1 h-[1px] bg-[#E4E4E7]" />
    </View>
  );
}
