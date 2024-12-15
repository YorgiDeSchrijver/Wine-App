import { Stack } from "expo-router";

export default function _layout() {
    return (
      <Stack>
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="[id]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="add"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    );
}
