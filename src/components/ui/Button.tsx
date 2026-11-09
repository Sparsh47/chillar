import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  type PressableProps,
} from "react-native";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "accent";
export type ButtonSize = "sm" | "md" | "lg";

type Props = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  textClassName?: string;
};

export function Button({
  title,
  variant = "primary",
  size = "lg",
  loading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = "",
  textClassName = "",
  ...pressableProps
}: Props) {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-[#18181B] active:bg-[#27272A] shadow-sm";
      case "secondary":
        return "bg-[#F4F4F5] active:bg-[#EBEBEA] border border-[#E4E4E7]";
      case "outline":
        return "bg-white border border-[#E4E4E7] active:bg-stone-50 shadow-sm";
      case "ghost":
        return "bg-transparent active:bg-stone-100";
      case "accent":
        return "bg-[#FFF1F2] border border-[#FECDD3] active:bg-[#FFE4E6]";
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case "primary":
        return "text-white font-semibold";
      case "secondary":
        return "text-[#18181B] font-semibold";
      case "outline":
        return "text-[#18181B] font-medium";
      case "ghost":
        return "text-zinc-600 font-medium";
      case "accent":
        return "text-[#BE123C] font-semibold";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "py-2 px-4 rounded-full";
      case "md":
        return "py-3 px-5 rounded-full";
      case "lg":
        return "py-3.5 px-6 rounded-full";
    }
  };

  const getTextSize = () => {
    switch (size) {
      case "sm":
        return "text-xs";
      case "md":
        return "text-sm";
      case "lg":
        return "text-base";
    }
  };

  return (
    <Pressable
      disabled={disabled || loading}
      className={`flex-row items-center justify-center gap-2 ${getVariantStyles()} ${getSizeStyles()} ${
        disabled ? "opacity-40" : ""
      } ${className}`}
      {...pressableProps}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? "#fff" : "#18181B"}
        />
      ) : (
        <>
          {leftIcon}
          <Text
            className={`${getTextStyles()} ${getTextSize()} ${textClassName}`}
          >
            {title}
          </Text>
          {rightIcon}
        </>
      )}
    </Pressable>
  );
}
