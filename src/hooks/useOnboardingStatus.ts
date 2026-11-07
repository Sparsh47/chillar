import { useCallback, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

const ONBOARDING_KEY = "onboarding_complete";

export function useOnboardingStatus() {
  const [isComplete, setIsComplete] = useState<boolean | null>(null); // null = loading

  useEffect(() => {
    SecureStore.getItemAsync(ONBOARDING_KEY).then((value) => {
      setIsComplete(value === "true");
    });
  }, []);

  const markComplete = useCallback(async () => {
    await SecureStore.setItemAsync(ONBOARDING_KEY, "true");
    setIsComplete(true);
  }, []);

  return { isComplete, markComplete };
}

