import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";
import { Redirect } from "expo-router";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const { isComplete } = useOnboardingStatus();

  if (isComplete === null) {
    return (
      <View className="flex-1 bg-black items-center justify-center">
        <ActivityIndicator color="white" />
      </View>
    );
  }

  return <Redirect href={isComplete ? ("/(tabs)" as never) : "/(onboarding)"} />;
}
