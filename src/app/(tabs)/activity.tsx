import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppLogo } from "@/components/ui/AppLogo";

const MOCK_ACTIVITIES = [
  {
    id: "1",
    title: "Dinner at CyberHub",
    desc: "Amit added ₹2,450.00 • You owe ₹645.00",
    time: "2h ago",
    icon: "restaurant-outline",
    isDebit: true,
  },
  {
    id: "2",
    title: "Settlement received",
    desc: "Maya paid you ₹1,250.00 via UPI",
    time: "Yesterday",
    icon: "checkmark-circle-outline",
    isDebit: false,
  },
  {
    id: "3",
    title: "Rishikesh Campsite",
    desc: "Karan paid ₹14,280.00 for 6 people",
    time: "3 days ago",
    icon: "bonfire-outline",
    isDebit: true,
  },
];

export default function ActivityScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top + 16 }}
      className="flex-1 bg-[#FAFAF9] px-5"
    >
      <View className="flex-row items-center gap-3 mb-2">
        <AppLogo width={85} height={26} />
        <View className="w-[1px] h-4 bg-[#E4E4E7]" />
        <Text className="text-[#18181B] text-lg font-bold">Activity</Text>
      </View>
      <Text className="text-zinc-500 text-sm mb-6">
        Recent group expenses, splits, and settlements
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {MOCK_ACTIVITIES.map((item) => (
          <View
            key={item.id}
            className="flex-row items-center gap-3 bg-white border border-[#EAEAE8] rounded-2xl p-4 mb-3 shadow-xs"
          >
            <View
              className={`w-10 h-10 rounded-full items-center justify-center ${
                item.isDebit ? "bg-rose-50" : "bg-emerald-50"
              }`}
            >
              <Ionicons
                name={item.icon as any}
                size={19}
                color={item.isDebit ? "#D9383A" : "#059669"}
              />
            </View>
            <View className="flex-1">
              <Text className="text-[#18181B] font-semibold text-base">
                {item.title}
              </Text>
              <Text className="text-zinc-500 text-xs mt-0.5">{item.desc}</Text>
            </View>
            <Text className="text-zinc-400 text-xs font-medium">{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
