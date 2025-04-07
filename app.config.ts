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
      [
        "expo-local-authentication",
        {
          faceIDPermission:
            "Der App erlauben Face ID zu verwenden, anstelle von der appinternen Pin.",
        },
      ],
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
      [
        "expo-sqlite",
        {
          enableFTS: true,
          useSQLCipher: true,
          android: {
            // Override the shared configuration for Android
            enableFTS: false,
            useSQLCipher: false,
          },
          ios: {
            // You can also override the shared configurations for iOS
            customBuildFlags: [
              "-DSQLITE_ENABLE_DBSTAT_VTAB=1 -DSQLITE_ENABLE_SNAPSHOT=1",
            ],
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  };
};
