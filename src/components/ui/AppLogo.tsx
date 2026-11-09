import { Image, type ImageStyle, type StyleProp } from "react-native";

type Props = {
  width?: number;
  height?: number;
  style?: StyleProp<ImageStyle>;
  className?: string;
};

export function AppLogo({
  width = 130,
  height = 42,
  style,
  className,
}: Props) {
  const source = require("../../../assets/images/logo.png")

  return (
    <Image
      source={source}
      style={[{ width, height }, style]}
      className={className}
      resizeMode="contain"
    />
  );
}
