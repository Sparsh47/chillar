import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  Pressable,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AppLogo } from "@/components/ui/AppLogo";
import { Button } from "@/components/ui/Button";
import type { OnboardingSlideData } from "@/constants/onboarding";

type Props = {
  slide: OnboardingSlideData;
  onNext: () => void;
  onFinish: () => void;
  isLast: boolean;
};

export function OnboardingSlide({ slide, onNext, onFinish, isLast }: Props) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <View style={{ width, height, backgroundColor: "#FAFAF9" }}>
      {/* ── Status pill ─────────────────────────────────────────────────── */}
      <View
        style={{ paddingTop: insets.top + 26 }}
        className="items-center px-6"
      >
        <View className="flex-row items-center gap-2 border border-rose-200/80 rounded-full px-3 py-1.5 bg-rose-50/80">
          <View className="w-2 h-2 rounded-full bg-[#D9383A]" />
          <Text className="text-[#BE123C] text-xs font-semibold tracking-wide">
            {slide.tag ?? "Offline-first • Workspaces synced"}
          </Text>
        </View>
      </View>

      {/* ── App Logo Image ──────────────────────────────────────────────── */}
      <View className="items-center mt-3">
        <AppLogo width={130} height={38} />
      </View>

      {/* ── Image illustration showcase card ─────────────────────────────── */}
      <View className="flex-1 items-center justify-center px-6 py-2">
        <View className="w-[88%] max-w-[340px] h-[270px] rounded-3xl bg-[#121216] overflow-hidden shadow-md items-center justify-center p-3 border border-stone-200">
          <Image
            source={slide.image}
            style={{
              width: "100%",
              height: "100%",
            }}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* ── Bottom content ───────────────────────────────────────────────── */}
      <View
        className="px-6"
        style={{ paddingBottom: insets.bottom + 20 }}
      >
        <Text
          className="text-[#18181B] font-extrabold leading-tight mb-3"
          style={{ fontSize: 34 }}
        >
          {slide.title}
        </Text>
        <Text className="text-zinc-600 text-[15px] leading-relaxed mb-6">
          {slide.subtitle}
        </Text>

        {/* Primary CTA with vector icon */}
        <Button
          title={isLast ? "Get Started" : slide.buttonText.replace(" →", "")}
          rightIcon={<Ionicons name="arrow-forward" size={18} color="#fff" />}
          onPress={isLast ? onFinish : onNext}
          className="w-full mb-3"
        />

        {/* Sign-in ghost link */}
        <Pressable
          onPress={onFinish}
          className="items-center py-2 active:opacity-60"
        >
          <Text className="text-zinc-500 text-sm">
            Already have an account?{" "}
            <Text className="text-[#18181B] font-semibold underline">Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
