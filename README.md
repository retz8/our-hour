# OurHour Prototype

This is a prototype for the OurHour app. It is built with React Native (Expo) and LangGraph backend.

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Checklist

- [x] Set up basic navigation and routing
- [ ] Implement core UI components
  - [x] Home screen
  - [ ] Diary upload screen
  - [ ] Diary Chat screen
- [ ] Design and implement chat interface
- [ ] Deploy LangGraph to the cloud
- [ ] Set up LangGraph backend integration
- [ ] Testing and debugging

## NOTE on Dev

- app doesn't use `expo-router` for navigation, instead it uses `react-navigation` for navigation. This is because of limitations in `expo-router` for customization.
