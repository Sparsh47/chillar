import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppLogo } from "@/components/ui/AppLogo";
import { Button } from "@/components/ui/Button";

export default function BillsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top + 16 }}
      className="flex-1 bg-[#FAFAF9] px-5 justify-between pb-8"
    >
      <View>
        <View className="flex-row items-center gap-3 mb-2">
          <AppLogo width={85} height={26} />
          <View className="w-[1px] h-4 bg-[#E4E4E7]" />
          <Text className="text-[#18181B] text-lg font-bold">Bills & Receipts</Text>
        </View>

        <Text className="text-zinc-500 text-sm mb-6 mt-1">
          Scan receipts to OCR items and split automatically with zero math.
        </Text>

        <View className="bg-white border border-[#EAEAE8] rounded-3xl p-8 items-center justify-center my-6 shadow-xs">
          <View className="w-16 h-16 rounded-full bg-rose-50 items-center justify-center mb-4">
            <Ionicons name="camera-outline" size={30} color="#D9383A" />
          </View>
          <Text className="text-[#18181B] font-bold text-lg mb-1">
            Scan your first receipt
          </Text>
          <Text className="text-zinc-500 text-xs text-center max-w-[240px] leading-relaxed">
            AI reads item names, prices, taxes & service charge instantly.
          </Text>
        </View>
      </View>

      <Button
        title="Open Camera Scanner"
        leftIcon={<Ionicons name="camera" size={18} color="#fff" />}
      />
    </View>
  );
}
