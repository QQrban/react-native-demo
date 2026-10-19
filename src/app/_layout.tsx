import "@/global.css";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen  options={{
          headerShown: false,
          headerTitle: "",
          headerTransparent: true,
          headerShadowVisible: false
      }}
        name="index"
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
