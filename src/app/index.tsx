import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isComplete } = useOnboardingStatus();

  if (isComplete === null) {
    return (
      <View className="flex-1 bg-[#FAFAF9] items-center justify-center">
        <ActivityIndicator color="#D9383A" />
      </View>
    );
  }

  return <Redirect href={isComplete ? ("/(tabs)" as never) : "/(onboarding)"} />;
}
