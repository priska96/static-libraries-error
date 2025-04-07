import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "static-libraries-error",
    slug: "static-libraries-error",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.priskakohnen.static-libraries-error",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      // "@logrocket/react-native",
      [
        "expo-build-properties",
        {
          ios: {
            useFrameworks: "dynamic",
          },
          android: {
            minSdkVersion: 25,
            extraGradleProperties: {
              jscFlavor: "org.webkit:android-jsc-intl:+",
            },
          },
        },
      ],
      // [
      //   "expo-local-authentication",
      //   {
      //     faceIDPermission:
      //       "Der App erlauben Face ID zu verwenden, anstelle von der appinternen Pin.",
      //   },
      // ],
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      // [
      //   "@sciendis/expo-ehc-nfc",
      //   {
      //     nfcReaderUsageDescription:
      //       "Diese App benötigt Zugriff auf NFC um persönliche Daten der eGK lesen zu können.",
      //     deploymentTarget: "16.0",
      //     languages: ["de", "en"],
      //   },
      // ],
    ],
    experiments: {
      typedRoutes: true,
    },
  };
};
