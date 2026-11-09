import { Text, View } from "react-native";

export type StatusVariant = "success" | "warning" | "synced" | "neutral" | "accent";

type Props = {
  label: string;
  variant?: StatusVariant;
  className?: string;
};

export function StatusBadge({
  label,
  variant = "neutral",
  className = "",
}: Props) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
      case "synced":
        return {
          container: "bg-emerald-50/90 border-emerald-200",
          dot: "bg-emerald-500",
          text: "text-emerald-700",
        };
      case "warning":
        return {
          container: "bg-amber-50/90 border-amber-200",
          dot: "bg-amber-500",
          text: "text-amber-800",
        };
      case "accent":
        return {
          container: "bg-rose-50/90 border-rose-200",
          dot: "bg-[#D9383A]",
          text: "text-[#BE123C]",
        };
      case "neutral":
        return {
          container: "bg-stone-100 border-stone-200/80",
          dot: "bg-stone-400",
          text: "text-stone-700",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <View
      className={`flex-row items-center gap-1.5 px-2.5 py-1 rounded-full border ${styles.container} ${className}`}
    >
      <View className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
      <Text className={`text-xs font-semibold tracking-wide ${styles.text}`}>
        {label}
      </Text>
    </View>
  );
}
