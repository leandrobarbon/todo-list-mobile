import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

import { Home } from "./src/screens/Home";

import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import { TaskProvider } from "./src/contexts/task";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  return (
    <>
      <StatusBar style="inverted" backgroundColor="transparent" translucent />
      {fontsLoaded ? (
        <TaskProvider>
          <Home />
        </TaskProvider>
      ) : (
        <Text>Carregando...</Text>
      )}
    </>
  );
}
