import React from "react";
import {
  Text,
  TextInput,
  View,
  type TextInputProps,
} from "react-native";

type Props = TextInputProps & {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
};

export function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  containerClassName = "",
  className = "",
  ...inputProps
}: Props) {
  return (
    <View className={`w-full ${containerClassName}`}>
      {label && (
        <Text className="text-white/50 text-xs font-semibold tracking-wider mb-2 uppercase">
          {label}
        </Text>
      )}

      <View className="flex-row items-center bg-[#121216] border border-[#24242C] focus:border-white/30 rounded-xl px-4 py-3.5">
        {leftIcon && <View className="mr-3">{leftIcon}</View>}

        <TextInput
          placeholderTextColor="rgba(255, 255, 255, 0.3)"
          className={`flex-1 text-white text-base font-normal ${className}`}
          {...inputProps}
        />

        {rightIcon && <View className="ml-3">{rightIcon}</View>}
      </View>

      {error && (
        <Text className="text-red-400 text-xs mt-1.5 ml-1">{error}</Text>
      )}
    </View>
  );
}

