# Commerence

Mobile commerence application.

## Installation

```bash
yarn add
```
or
```bash
npm install
```


## Usage

```javascript
//App.js
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
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
