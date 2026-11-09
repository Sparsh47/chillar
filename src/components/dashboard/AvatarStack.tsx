import { Text, View } from "react-native";
import type { GroupMember } from "./types";

type Props = {
  members: GroupMember[];
  maxVisible?: number;
  size?: number;
};

export function AvatarStack({ members, maxVisible = 6, size = 26 }: Props) {
  const visibleMembers = members.slice(0, maxVisible);
  const remaining = members.length - maxVisible;

  return (
    <View className="flex-row items-center">
      {visibleMembers.map((member, index) => (
        <View
          key={member.id}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: member.bgColor,
            marginLeft: index === 0 ? 0 : -7,
            zIndex: visibleMembers.length - index,
          }}
          className="border-2 border-white items-center justify-center shadow-xs"
        >
          <Text
            style={{ color: member.textColor || "#18181B", fontSize: size * 0.42 }}
            className="font-bold"
          >
            {member.initial}
          </Text>
        </View>
      ))}

      {remaining > 0 && (
        <View
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            marginLeft: -7,
            zIndex: 0,
          }}
          className="border-2 border-white bg-stone-100 items-center justify-center"
        >
          <Text className="text-stone-700 text-[10px] font-bold">+{remaining}</Text>
        </View>
      )}
    </View>
  );
}
