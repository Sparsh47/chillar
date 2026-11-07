import { useCallback, useRef, useState } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { OnboardingDots } from "@/components/onboarding/OnboardingDots";
import { OnboardingSlide } from "@/components/onboarding/OnboardingSlide";
import { ONBOARDING_SLIDES } from "@/constants/onboarding";
import { useOnboardingStatus } from "@/hooks/useOnboardingStatus";

export default function OnboardingScreen() {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const { markComplete } = useOnboardingStatus();

  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const onViewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: { index?: number | null }[] }) => {
      const idx = viewableItems[0]?.index;
      if (idx != null) setActiveIndex(idx);
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ).current as any;

  const goToNext = useCallback(() => {
    if (activeIndex < ONBOARDING_SLIDES.length - 1) {
      flatListRef.current?.scrollToIndex({ index: activeIndex + 1 });
    } else {
      handleFinish();
    }
  }, [activeIndex]);

  const handleFinish = useCallback(async () => {
    await markComplete();
    router.replace("/(auth)" as never);
  }, [markComplete]);

  return (
    <View className="flex-1 bg-[#0A0A0C] relative">
      {/* ── Top progress bars (kept exactly as your OnboardingDots) ───── */}
      <View
        style={{ top: insets.top + 8 }}
        className="w-full absolute z-20 px-6"
      >
        <OnboardingDots
          total={ONBOARDING_SLIDES.length}
          activeIndex={activeIndex}
        />
      </View>

      {/* ── Slides ────────────────────────────────────────────────────── */}
      <FlatList
        ref={flatListRef}
        data={ONBOARDING_SLIDES}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <OnboardingSlide
            slide={item}
            onNext={goToNext}
            onFinish={handleFinish}
            isLast={index === ONBOARDING_SLIDES.length - 1}
          />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
    </View>
  );
}
