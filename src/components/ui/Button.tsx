import React from "react";
import {
  ActivityIndicator,
  Pressable,
  Text,
  type PressableProps,
} from "react-native";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
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
        return "bg-white active:opacity-80";
      case "secondary":
        return "bg-[#1C1C22] active:bg-[#24242C] border border-[#24242C]";
      case "outline":
        return "bg-transparent border border-[#24242C] active:border-white/40";
      case "ghost":
        return "bg-transparent active:opacity-60";
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case "primary":
        return "text-black font-bold";
      case "secondary":
        return "text-white font-semibold";
      case "outline":
        return "text-white font-medium";
      case "ghost":
        return "text-white/70 font-medium";
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "py-2 px-4 rounded-full";
      case "md":
        return "py-3 px-5 rounded-full";
      case "lg":
        return "py-4 px-6 rounded-full";
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
          color={variant === "primary" ? "#000" : "#fff"}
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

