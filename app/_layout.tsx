import { Stack } from "expo-router";
import "@/global.css";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: "#0C0F14" },
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerTintColor: "#0C0F14",
            statusBarBackgroundColor: "#0C0F14",
            navigationBarColor: "#0C0F14",
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
