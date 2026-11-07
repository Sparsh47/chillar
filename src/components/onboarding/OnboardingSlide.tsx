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
    <View className="bg-background" style={{ width, height }}>
      {/* ── Status pill ─────────────────────────────────────────────────── */}
      <View
        style={{ paddingTop: insets.top + 26 }}
        className="items-center px-6"
      >
        <View className="flex-row items-center gap-2 border border-white/10 rounded-full px-3 py-1.5 bg-white/[0.02]">
          <View className="w-2 h-2 rounded-full bg-emerald-400" />
          <Text className="text-white/55 text-xs tracking-wide">
            {slide.tag ?? "Offline-first • Workspaces synced"}
          </Text>
        </View>
      </View>

      {/* ── App Logo Image (instead of text) ────────────────────────────── */}
      <View className="items-center mt-3">
        <AppLogo width={130} height={38} />
      </View>

      {/* ── Image illustration ───────────────────────────────────────────── */}
      <View className="flex-1 items-center justify-center px-6 py-2">
        <Image
          source={slide.image}
          style={{
            width: Math.min(width * 0.85, 340),
            height: "100%",
            maxHeight: 290,
          }}
          resizeMode="contain"
        />
      </View>

      {/* ── Bottom content ───────────────────────────────────────────────── */}
      <View
        className="px-6"
        style={{ paddingBottom: insets.bottom + 20 }}
      >
        <Text
          className="text-white font-extrabold leading-tight mb-3"
          style={{ fontSize: 34 }}
        >
          {slide.title}
        </Text>
        <Text className="text-white/55 text-[15px] leading-relaxed mb-6">
          {slide.subtitle}
        </Text>

        {/* Primary CTA with vector icon */}
        <Button
          title={isLast ? "Get Started" : slide.buttonText.replace(" →", "")}
          rightIcon={<Ionicons name="arrow-forward" size={18} color="#000" />}
          onPress={isLast ? onFinish : onNext}
          className="w-full mb-3"
        />

        {/* Sign-in ghost link */}
        <Pressable
          onPress={onFinish}
          className="items-center py-2 active:opacity-60"
        >
          <Text className="text-white/45 text-sm">
            Already have an account?{" "}
            <Text className="text-white/75 font-semibold">Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
