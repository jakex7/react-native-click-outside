# react-native-click-outside

React Native library to detect clicks outside the component 👆


![Build status - typescript compile](https://img.shields.io/github/actions/workflow/status/jakex7/react-native-click-outside/ci.yml?branch=main)
![License badge](https://img.shields.io/npm/l/react-native-click-outside)
![Latest, released version](https://img.shields.io/github/v/release/jakex7/react-native-click-outside)
![Date of latest commit](https://img.shields.io/github/last-commit/jakex7/react-native-click-outside)


## 🪄 Installation

```sh
yarn add react-native-click-outside
```

## 📖 Usage

First of all, you need to wrap your app with `ClickOutsideProvider` as high as possible, for example in `App.tsx`:

```tsx
import { ClickOutsideProvider } from 'react-native-click-outside';

export const App = () => (
  <ClickOutsideProvider>
    { /* rest of your app */ }
  </ClickOutsideProvider>
);
```

Then you can call `useClickOutside` hook to detect clicks outside the component. First argument is the function that will be called every time user clicks outside of this component. It returns `ref` that you need to attach to the component you want to detect clicks outside of. For example:

```tsx
import { useClickOutside } from 'react-native-click-outside';

export default function MyComponent() {
  const ref = useClickOutside<View>(() => console.log('clicked outside A'));
  return (
    <View ref={ref}>
      <Text>Test</Text>
    </View>
  );
}
```

## ⚖️ License

**[MIT](/LICENSE)**

## 📝 Contribute

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.


### Built with ♥️ by Jakub Grzywacz
