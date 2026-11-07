import type { ImageSourcePropType } from "react-native";

export type OnboardingSlideData = {
  id: string;
  tag?: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  buttonText: string;
};

export const ONBOARDING_SLIDES: OnboardingSlideData[] = [
  {
    id: "welcome",
    tag: "Offline-first • Workspaces synced",
    title: "Plan the hangout.\nTap what you ate.\nSettle in one tap.",
    subtitle:
      "Work in the mountains without chaotic group chat math. Plan trips, split receipts, and simplify debts entirely offline.",
    image: require("../../assets/images/onboarding/onboarding-1.png"),
    buttonText: "Continue →",
  },
  {
    id: "billsplit",
    tag: "Offline-first • Workspaces synced",
    title: "Zero-install bill\nsplitting.",
    subtitle:
      "Share the screen, pass the phone, or send a link. Anyone can tap to claim items instantly, with GST, tips, and discounts proportionally split behind the scenes.",
    image: require("../../assets/images/onboarding/onboarding-2.png"),
    buttonText: "Continue →",
  },
  {
    id: "debt",
    tag: "Offline-first • Workspaces synced",
    title: "Min-cash-flow debt\nsimplification.",
    subtitle:
      "No more endless back-and-forth. Chillar calculates the absolute minimum number of transfers to settle all group expenses instantly.",
    image: require("../../assets/images/onboarding/onboarding-3.png"),
    buttonText: "Get Started →",
  },
];
