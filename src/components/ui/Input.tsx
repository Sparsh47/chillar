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
        <Text className="text-zinc-500 text-xs font-semibold tracking-wider mb-2 uppercase">
          {label}
        </Text>
      )}

      <View className="flex-row items-center bg-white border border-[#E4E4E7] focus:border-[#D9383A] rounded-2xl px-4 py-3.5 shadow-sm">
        {leftIcon && <View className="mr-3">{leftIcon}</View>}

        <TextInput
          placeholderTextColor="rgba(24, 24, 27, 0.35)"
          className={`flex-1 text-[#18181B] text-base font-normal ${className}`}
          {...inputProps}
        />

        {rightIcon && <View className="ml-3">{rightIcon}</View>}
      </View>

      {error && (
        <Text className="text-rose-600 text-xs mt-1.5 ml-1 font-medium">{error}</Text>
      )}
    </View>
  );
}
