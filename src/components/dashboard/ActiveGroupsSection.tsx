import { Text, View } from "react-native";
import { GroupCard } from "./GroupCard";
import type { GroupItem } from "./types";

type Props = {
  groups: GroupItem[];
  onSelectGroup?: (group: GroupItem) => void;
};

export function ActiveGroupsSection({ groups, onSelectGroup }: Props) {
  return (
    <View className="w-full">
      <Text className="text-zinc-400 text-xs font-semibold tracking-wider uppercase mb-3 px-1">
        Active Groups & Outings
      </Text>

      {groups.map((group) => (
        <GroupCard
          key={group.id}
          item={group}
          onPress={() => onSelectGroup?.(group)}
        />
      ))}
    </View>
  );
}
