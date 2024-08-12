Geofencing Application with React Native

Objective
This project implements a geofencing feature using React Native, focusing on real-time data handling and optimization techniques.

Task Description
The geofencing application is designed to:

1. Request permission to access the user's location.
2. Track the user's real-time location.
3. Allow the user to set a geofence (a circular boundary) around a specific location on a map.
4. Trigger a notification when the user enters or exits the geofenced area.

Requirements
1. React Native Maps: Used for displaying the map.
2. React Native Geolocation: Used to access the user's location.
3. React Native Alerts: Used to trigger notifications.
4. Geofencing Logic: Implemented using react-native-geofence or react-native-geolocation-service.

Prerequisites
1. Node.js: Ensure you have Node.js installed on your system.
2. React Native CLI: Install the React Native CLI globally using npm or yarn.
3. Android Studio/Xcode: Set up the necessary environment for running Android/iOS apps.
4. Google Maps API Key: A valid Google Maps API key is required for using React Native Maps.

Installation

1. Clone the Repository:
git clone https://github.com/WapSecure/geofencing.git
cd geofencing

2. Install Dependencies:
npm install
# or
yarn install

3. Configure API Key:
Add your Google Maps API key to the android/app/src/main/AndroidManifest.xml file:
<application>
    <!-- Other configurations -->
    <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="YOUR_API_KEY_HERE" />
</application>

4. Start the Development Server:
npx react-native start

5. For Android:
npx react-native run-android

6. For iOS:
npx react-native run-ios

Folder Structure
The project is organized in a modular way to keep the codebase clean and maintainable. Here’s a breakdown of the folder structure:

GeofencingApp/
├── android/
├── ios/
├── src/
│   ├── components/
│   │   ├── GeofenceSetup.js
│   │   └── MapView.js
│   ├── services/
│   │   └── GeofencingService.js
│   ├── screens/
│   │   └── HomeScreen.js
│   ├── utils/
│   │   └── Permissions.js
│   └── App.js
├── .gitignore
├── package.json
└── README.md

Folder and File Descriptions
1. android/: Contains Android-specific code and configurations. This directory is generated when you set up a React Native project and handles all Android-related functionalities.

2. ios/: Contains iOS-specific code and configurations. Similar to the android/ directory, this is generated during project setup and manages iOS-related tasks.

3. src/: This is the main source folder for the React Native application. It contains the following subdirectories:

4. components/: This directory houses reusable UI components that can be used throughout the application.

5. GeofenceSetup.js: Handles the logic and UI for setting up the geofence. This component likely includes options for selecting a point on the map and defining the geofence radius.

6. MapView.js: Manages the display of the map, including rendering the user's location and any geofenced areas. It uses the React Native Maps library for displaying the map and interacting with map-related features.

7. services/: Contains files responsible for handling business logic or external service interactions.

8. GeofencingService.js: Implements the geofencing logic, including monitoring the user's location relative to the geofence and triggering actions (like notifications) when the user enters or exits the geofenced area.
screens/: This directory contains the main screens of the application.

9. HomeScreen.js: Serves as the entry point of the app, where the map is displayed and geofencing features are controlled. This screen brings together the various components (like GeofenceSetup and MapView) to create the primary user interface.

10. utils/: Contains utility functions and helpers that can be used across different parts of the application.

11. Permissions.js: Likely manages permission-related tasks, such as requesting location access from the user. It abstracts the permission handling logic, making it easier to reuse across the app.

12. App.js: The main entry point for the React Native application. This file initializes the app and renders the root component (which might include navigation or the initial screen like HomeScreen).

13. .gitignore: Specifies files and directories that should be ignored by Git version control. Typically includes dependencies, build files, and environment-specific configurations.

14. package.json: Contains metadata about the project, including dependencies, scripts, and configurations. It’s essential for managing the project's environment and installing necessary packages.

15. README.md: The documentation file for the project. It explains the project's purpose, setup instructions, and any other relevant details.

Implementation Details
1. Requesting Location Permission
The app asks the user for permission to access their location using the react-native-geolocation-service library. If permission is denied, an alert is shown.

2. Real-time Location Tracking
The user's location is tracked in real-time and displayed on the map using react-native-maps. The map centers on the user's current location.

3. Setting a Geofence
The user can set a geofence by selecting a point on the map and specifying a radius. The geofenced area is visually represented on the map.

4. Geofencing Logic and Notifications
The app monitors the user's position relative to the geofenced area. When the user enters or exits the geofenced area, a notification is triggered using React Native's Alert API.

Usage
1. Open the app and allow location permissions.
2. Set a geofence by tapping on a location on the map and defining the radius.
3. Receive notifications when you enter or exit the geofenced area.

Troubleshooting
1. Google Maps API Key: Ensure that the API key is correctly configured in the AndroidManifest.xml file.
2. Permission Issues: If the app doesn't request location permission, verify that the requestPermissions function is properly implemented.

License
This project is licensed under the MIT License - see the LICENSE file for details.
