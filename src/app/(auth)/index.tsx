import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { AuthHeader } from "@/components/auth/AuthHeader";
import { GoogleButton } from "@/components/auth/GoogleButton";
import { Button } from "@/components/ui/Button";
import { Divider } from "@/components/ui/Divider";
import { Input } from "@/components/ui/Input";

export default function AuthScreen() {
  const insets = useSafeAreaInsets();
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = () => {
    if (!identifier.trim()) {
      setError("Please enter your phone number or email");
      return;
    }
    setError("");
    setLoading(true);

    // Navigate to profile setup/view
    setTimeout(() => {
      setLoading(false);
      router.push("/(auth)/profile" as never);
    }, 400);
  };

  const handleGoogleAuth = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/(auth)/profile" as never);
    }, 400);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-[#0A0A0C]"
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
          paddingTop: insets.top + 24,
          paddingBottom: insets.bottom + 16,
          paddingHorizontal: 24,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full">
          {/* Header with AppLogo */}
          <AuthHeader />

          {/* Form */}
          <View className="w-full mt-2">
            <Input
              label="PHONE OR EMAIL"
              placeholder="Enter your phone number or email"
              value={identifier}
              onChangeText={(text) => {
                setIdentifier(text);
                if (error) setError("");
              }}
              error={error}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="done"
              onSubmitEditing={handleContinue}
              leftIcon={
                <Ionicons
                  name="mail-outline"
                  size={18}
                  color="rgba(255, 255, 255, 0.4)"
                />
              }
            />

            <Button
              title="Continue"
              rightIcon={<Ionicons name="arrow-forward" size={18} color="#000" />}
              onPress={handleContinue}
              loading={loading}
              className="w-full mt-4"
            />

            <Divider text="or" />

            <GoogleButton onPress={handleGoogleAuth} disabled={loading} />
          </View>
        </View>

        {/* Footer Terms */}
        <View className="items-center px-4 pt-8">
          <Text className="text-white/40 text-xs text-center leading-relaxed">
            By continuing, you agree to Chillar's{" "}
            <Text className="text-white/70 underline">Terms</Text> &{" "}
            <Text className="text-white/70 underline">Privacy Policy</Text>.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

