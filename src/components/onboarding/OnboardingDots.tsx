import { View } from "react-native";

type Props = {
  total: number;
  activeIndex: number;
};

export function OnboardingDots({ total, activeIndex }: Props) {
  return (
    <View className="flex-row gap-2 px-2">
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          className={[
            "h-1 rounded-full transition-all flex-1",
            i === activeIndex ? "bg-[#D9383A]" : "bg-stone-200",
          ].join(" ")}
        />
      ))}
    </View>
  );
}
