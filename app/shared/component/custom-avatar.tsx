import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";

interface CustomAvatarProps {
  fallbackText: string;
  imageUri: string;
}

export default function CustomAvatar({
  fallbackText,
  imageUri,
}: CustomAvatarProps) {
  return (
    <Avatar size="lg">
      <AvatarFallbackText>{fallbackText}</AvatarFallbackText>
      <AvatarImage
        source={{
          uri: imageUri,
        }}
      />
      <AvatarBadge />
    </Avatar>
  );
}
