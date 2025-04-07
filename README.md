# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Prebuild ios

```bash
npx expo prebuild --clean -p ios
```

3. Check Error Msg

```bash
✔ Cleared ios code
✔ Created native directory
✔ Updated package.json | no changes
✔ Finished prebuild
⚠️  Something went wrong running `pod install` in the `ios` directory.
Command `pod install` failed.
└─ Cause: The 'Pods-staticlibrarieserror' target has transitive dependencies that include statically linked binaries: (ExpoModulesCore)

pod install --repo-update --ansi exited with non-zero code: 1
```
