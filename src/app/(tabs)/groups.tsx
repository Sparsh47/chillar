import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { GroupCard } from "@/components/dashboard/GroupCard";
import { AppLogo } from "@/components/ui/AppLogo";
import { Button } from "@/components/ui/Button";
import { MOCK_GROUPS } from "@/constants/dashboard";

export default function GroupsScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{ paddingTop: insets.top + 16 }}
      className="flex-1 bg-[#FAFAF9] px-5"
    >
      <View className="flex-row items-center justify-between mb-6">
        <View className="flex-row items-center gap-3">
          <AppLogo width={85} height={26} />
          <View className="w-[1px] h-4 bg-[#E4E4E7]" />
          <Text className="text-[#18181B] text-lg font-bold">Groups</Text>
        </View>
        <Button
          title="New Group"
          size="sm"
          variant="secondary"
          leftIcon={<Ionicons name="add" size={16} color="#18181B" />}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {MOCK_GROUPS.map((group) => (
          <GroupCard key={group.id} item={group} />
        ))}
      </ScrollView>
    </View>
  );
}
