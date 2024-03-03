import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";
import StackNav from "./src/Navigations/StackNav";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
