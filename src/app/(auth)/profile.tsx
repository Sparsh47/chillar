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
      className="flex-1 bg-[#FAFAF9]"
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
                color="rgba(24, 24, 27, 0.45)"
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
                color="rgba(24, 24, 27, 0.45)"
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
                color="rgba(24, 24, 27, 0.45)"
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
                color="rgba(24, 24, 27, 0.45)"
              />
            }
          />
          <Text className="text-zinc-500 text-xs mt-1">
            Friends will settle group balances directly to this UPI ID.
          </Text>
        </ProfileSection>

        {/* Sync & Workspace */}
        <ProfileSection title="Offline-First Sync">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-3">
              <View className="w-9 h-9 rounded-full bg-emerald-50 items-center justify-center">
                <Ionicons name="cloud-done-outline" size={20} color="#059669" />
              </View>
              <View>
                <Text className="text-[#18181B] font-semibold text-sm">
                  Workspaces Synced
                </Text>
                <Text className="text-zinc-500 text-xs">
                  SQLite database active & offline-ready
                </Text>
              </View>
            </View>
            <View className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </View>
        </ProfileSection>

        {/* Action Buttons */}
        <View className="gap-3 mt-4 mb-6">
          <Button
            title="Save Changes"
            onPress={handleSave}
            loading={saving}
            rightIcon={<Ionicons name="checkmark" size={18} color="#fff" />}
            className="w-full"
          />

          <Button
            title="Log Out"
            variant="outline"
            onPress={handleLogout}
            leftIcon={
              <Ionicons name="log-out-outline" size={18} color="#BE123C" />
            }
            className="w-full border-rose-200 bg-rose-50/60 active:bg-rose-100"
            textClassName="text-[#BE123C] font-semibold"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
