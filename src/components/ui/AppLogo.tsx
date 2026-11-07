import { Image, type ImageStyle, type StyleProp } from "react-native";

type Props = {
  width?: number;
  height?: number;
  style?: StyleProp<ImageStyle>;
  className?: string;
};

export function AppLogo({ width = 130, height = 42, style, className }: Props) {
  return (
    <Image
      source={require("../../../assets/images/logo.png")}
      style={[{ width, height }, style]}
      className={className}
      resizeMode="contain"
    />
  );
}

