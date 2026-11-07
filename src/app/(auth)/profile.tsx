import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ProfileAvatar } from "@/components/profile/ProfileAvatar";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { ProfileSection } from "@/components/profile/ProfileSection";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  const [name, setName] = useState("Alex Rivers");
  const [phone, setPhone] = useState("+91 98765 43210");
  const [email, setEmail] = useState("alex.rivers@gmail.com");
  const [upiId, setUpiId] = useState("alex@okhdfcbank");
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      Alert.alert("Success", "Profile updated successfully!", [
        {
          text: "Go to Home",
          onPress: () => router.replace("/(tabs)" as never),
        },
      ]);
    }, 500);
  };

  const handleLogout = () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign Out",
        style: "destructive",
        onPress: () => router.replace("/(auth)" as never),
      },
    ]);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-[#0A0A0C]"
    >
      <ScrollView
        contentContainerStyle={{
          paddingTop: insets.top + 10,
          paddingBottom: insets.bottom + 24,
          paddingHorizontal: 20,
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <ProfileHeader title="Your Profile" />

        {/* Avatar */}
        <ProfileAvatar
          name={name}
          subtitle={upiId ? `UPI: ${upiId}` : "Set up your payment details"}
          onPressEdit={() => Alert.alert("Upload Photo", "Choose from gallery or take a photo")}
        />

        {/* Personal Info */}
        <ProfileSection title="Personal Information">
          <Input
            label="FULL NAME"
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            leftIcon={
              <Ionicons
                name="person-outline"
                size={18}
                color="rgba(255, 255, 255, 0.4)"
              />
            }
          />
          <Input
            label="EMAIL ADDRESS"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            leftIcon={
              <Ionicons
                name="mail-outline"
                size={18}
                color="rgba(255, 255, 255, 0.4)"
              />
            }
          />
          <Input
            label="PHONE NUMBER"
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone"
            keyboardType="phone-pad"
            leftIcon={
              <Ionicons
                name="call-outline"
                size={18}
                color="rgba(255, 255, 255, 0.4)"
              />
            }
          />
        </ProfileSection>

        {/* Settlement & UPI */}
        <ProfileSection title="Settlement & Payments">
          <Input
            label="PRIMARY UPI ID (VPA)"
            value={upiId}
            onChangeText={setUpiId}
            placeholder="e.g. yourname@upi"
            autoCapitalize="none"
            leftIcon={
              <Ionicons
                name="wallet-outline"
                size={18}
                color="rgba(255, 255, 255, 0.4)"
              />
            }
          />
          <Text className="text-white/40 text-xs mt-1">
            Friends will settle group balances directly to this UPI ID.
          </Text>
        </ProfileSection>

        {/* Sync & Workspace */}
        <ProfileSection title="Offline-First Sync">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="w-9 h-9 rounded-full bg-emerald-500/10 items-center justify-center">
                <Ionicons name="cloud-done-outline" size={20} color="#34d399" />
              </View>
              <View>
                <Text className="text-white font-semibold text-sm">
                  Workspaces Synced
                </Text>
                <Text className="text-white/50 text-xs">
                  SQLite database active & offline-ready
                </Text>
              </View>
            </View>
            <View className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </View>
        </ProfileSection>

        {/* Action Buttons */}
        <View className="gap-3 mt-2">
          <Button
            title="Save Changes"
            onPress={handleSave}
            loading={saving}
            rightIcon={<Ionicons name="checkmark" size={18} color="#000" />}
            className="w-full"
          />

          <Button
            title="Sign Out"
            variant="ghost"
            onPress={handleLogout}
            leftIcon={
              <Ionicons name="log-out-outline" size={18} color="rgba(255,255,255,0.6)" />
            }
            className="w-full"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

