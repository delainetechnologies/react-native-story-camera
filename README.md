![Camera View - DelaineTech](./assets/poster.jpeg)

# react-native-story-camera

<!-- [![react-native-story-view on npm](https://img.shields.io/npm/v/react-native-story-view.svg?style=flat)](https://www.npmjs.com/package/react-native-story-view) [![react-native-story-view downloads](https://img.shields.io/npm/dm/react-native-story-view)](https://www.npmtrends.com/react-native-story-view) [![react-native-story-view install size](https://packagephobia.com/badge?p=react-native-story-view)](https://packagephobia.com/result?p=react-native-story-view) [![Android](https://img.shields.io/badge/Platform-Android-green?logo=android)](https://www.android.com) [![iOS](https://img.shields.io/badge/Platform-iOS-green?logo=apple)](https://developer.apple.com/ios) [![MIT](https://img.shields.io/badge/License-MIT-green)](https://opensource.org/licenses/MIT) -->

---

React Native Story Camera is a fully customizable UI library that provide camera picker module for capture photos and record videos in React Native, inspired by WhatsApp's media sharing experience.


## 🎬  Overview

React Native Story Camera allows users to capture videos and photos, as well as select multiple images and videos from their device gallery. Built with the latest version of React Native.
It is simple to use and works on both Android and iOS platforms.


## 🎬  Features

* **Capture videos and photos**: A customizable camera interface
* **Select multiple images and videos**: Access the device's media gallery.
* **Pagination**: Smooth scrolling for large media lists.
* **Video Recording**: Seamless recording experience 
* **Fully customizable**: Tailor the UI to your needs with available props
* **Cross-platform compatibility**: compatible with both Android and iOS platforms
* **Formatted Data**: Return formatted and optimized data from camera and gallery for all media type
* **Optimized for performance**:  Built with modern React Native practices


## 🎬 Preview

---           
| ![alt Default](./assets/preview.jpeg)

---

## 🎬 Quick Access

[🎬 Installation](#installation) | [Permissions](#permissions) | [Usage](#usage) | [Props](#props) | [Example](#example) | [License](#license)

## Installation

##### 1. Install React Native Story Camera

```bash
  npm install @delainetech/react-native-story-camera
```
#### --- or ---
```bash
  yarn add @delainetech/react-native-story-camera
```

##### 2. Install peer dependencies

To use React Native Story Camera, you need to install the following dependencies:

[react-native-vision-camera](https://github.com/mrousavy/react-native-vision-camera "react-native-vision-camera") is a camera library for React Native apps. 

[@react-native-camera-roll/camera-roll](https://www.npmjs.com/package/@react-native-camera-roll/camera-roll "@react-native-camera-roll/camera-roll") is used to access media files from device library

[react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker) is a media picker library for React Native apps. 

[react-native-permissions](https://www.npmjs.com/package/react-native-permissions "react-native-permissions") is added to access camera and storage permission in Android & IOS devices.

[react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated) is a animation library for React Native apps. 

[react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler) is a gesture effects library for React Native apps. 


```bash
$ npm install react-native-vision-camera react-native-permissions react-native-reanimated react-native-gesture-handler @react-native-camera-roll/camera-roll react-native-image-crop-picker

# --- or ---

$ yarn add react-native-vision-camera react-native-permissions react-native-reanimated react-native-gesture-handler @react-native-camera-roll/camera-roll react-native-image-crop-picker
```

> Note: If you already have these libraries installed of the latest versions, you are done here! . If not then please Please follow the installation instructions for each dependency on their respective GitHub pages.


##### 3. Install cocoapods in the ios project

```bash
cd ios && pod install
```

> Note: Make sure to add Reanimated's babel plugin to your `babel.config.js`

```
module.exports = {
      ...   // do not add it here
      plugins: [
          ...
          'react-native-reanimated/plugin',
      ],
  };
```


---


## Permissions

To use React Native Story Camera, you need to add the following permissions to your project:

##### 1. iOS   

Add the following permissions to your project `Info.plist` file:
```xml
<key>NSCameraUsageDescription</key>
<string>Allow access to capture photo</string>

<key>NSMicrophoneUsageDescription</key>
<string>Allow access to record audio</string>

<key>NSPhotoLibraryUsageDescription</key>
<string>Allow access to select photo</string>


```
##### 2. Android

Add the following permissions to your `AndroidManifest.xml` file:
```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
<uses-permission android:name="android.permission.CAMERA"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES"/>
<uses-permission android:name="android.permission.READ_MEDIA_VIDEOS"/>
```
> Note: After added these above permission . You are done here . No Need to do extra permission work in your main component file . 

## Usage
-----------------------------------------------------------

```javascript

import {  View } from 'react-native'

import React from 'react'

import CameraPicker from 'react-native-story-camera';

export default function App() {
  return (
      <View style={{ flex : 1}}>
        <CameraPicker
          onSelect={(data:any)=>console.log("data : "+JSON.stringify(data))}
          onBackPress={()=>console.log("onBack Press")} />
      </View>
  );
}



```


## Icon Props & styles
| Prop                | Default                         | Type      | Description                                                                                                                                                                                                                       |
| :------------------ | :------------------------------ | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| containerStyle                | {}                         | ViewStyle    | CameraPicker container view style                                                                                                                                                                               |
| backIcon            | default                           | Image   | Apply local icon image with require label                                                                                                                                                                             |
| backIconStyle       | {}                         | ImageStyle    | Apply all style props of Image component react native  |
| flashOnIcon             | default                               | Image  | Apply local icon image with require label                                                                                                                                                               |
| flashOffIcon         | default                             | Image  | Apply local icon image with require label                                                                                                                                                           |
| flashIconStyle               | default                              | ImageStyle  | Apply all style props of Image component react native                                                                                                                                                                                   |
| galleryIcon           | default                             | Image | Apply local icon image with require label                                                                                                                                                                                                                     |
| galleryIconStyle          | {}                              | ImageStyle | Apply all style props of Image component react native                                                                                                                                                                                                                      |
| cameraToggleIcon   | default                             | Image  | Apply local icon image with require label                                                                                                                                                           |
| cameraToggleIconStyle  | {}                           | ImageStyle   | Apply all style props of Image component react native                                                                                                                                                                                                      |
| cameraCaptureIcon            | default                              | Image    | Apply local icon image with require label                                                                                                                                                                                 |
| cameraCaptureIconStyle          | {}                              | ImageStyle | Apply all style props of Image component react native                                                                                                                                                                                                             |
| videoCaptureIcon       | {}                              | Image | Apply local icon image with require label                                                                                                                                                                                                                   |
| videoCaptureIconStyle | {}                              | ImageStyle |  Apply all style props of Image component react native                                                                                                                                                                                                            |
| recordVideoIcon        | default                             | Image    | Apply local icon image with require label                                                                                                                                                                                                            |
| recordVideoIconStyle        | {}                      | ImageStyle     |  Apply all style props of Image component react native                                                                                                                                                 |
| slideUpIcon       | default                             | Image    | Apply local icon image with require label                                                                                                                                                                                                         |
| slideUpIconStyle       | {}                             | ImageStyle    | Apply all style props of Image component react native                                                                                                                                                                                                        |
| submitButtonStyle       | {}                             | ViewStyle    | Submit Button icon container , Apply all style props of View component                                                                                                                                                                                                       |
| submitButtonIcon       | default                             | Image    | Apply local icon image with require label                                                                                                                                                                                                        |
| submitButtonIconStyle       | {}                             | ImageStyle    | Apply all style props of Image component                                                                                                                                                                                                       |
| submitButtonTextStyle       | {}                             | TextStyle    | Apply all style props of Text component react native                                                                                                                                                                                                        |
| mediaSelectIcon       | default                             | Image    | Apply all style props of Image component                                                                                                                                                                                                         |
| mediaSelectIconStyle       | {}                             | ImageStyle    | Apply all style props of Image component react native                                                                                                                                                                                                        |

---

---

## Methods & Others Props
| Prop                | Default                         | Type      | Description                                                                                                                                                                                                                       |
| :------------------ | :------------------------------ | :-------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onBackPress                | {()=> }                         | function    | Handle close button control onPress                                                                                                                                                                              |
| onSelect            | {()=> }                            | function   | return response after media selection                                                                                                                                                                             |
| mediaPerPage       | 10                        | number    | numbers for images and videos render perpage by default  |
| timerContainer             | {}                               | ViewStyle  | View styles for timer component display during recording                                                                                                                                                              |
| timerTextStyle         | {}                             | TextStyle  | apply TextStyle props for text in timer component                                                                                                                                                          |
| maxRecordDuration               | 30                              | number  | pass record duration value i:e 30 is in seconds , you can set your duration according to your need                                                                                                                                                                                   |
| activeMediaType           | "Photo"                          | string | Default media type value when camera picker render for the first time  , other one is "Video"                                                                                                                                                                                                                    |
| mediaTypeActiveButtonStyle          | {}                              | ViewStyle | Apply all style props of View component for Active Media type switch button                                                                                                                                                                                                                      |
| mediaTypeButtonStyle   | {}                             | ViewStyle  | Apply all style props of View component for InActive Media type switch button                                                                                                                                                                                                                                                                                                                                                    |
| mediaTypeTextStyle  | {}                           | TextStyle   | Apply all style props of Text component for inactive media button label                                                                                                                                                                                                     |
| mediaTypeActiveTextStyle            | {}                              | TextStyle    | Apply all style props of Text component for active media button label                                                                                                                                                                                |

---

---

<!-- ## Repository -->

<!-- Checkout our GitHub repository
[@delainetech/react-native-story-camera](https://github.com/delainetechnologies "react-native-story-camera") <br/> -->


## Contributors

[Pardeep Sharma](https://github.com/Pardeep03315 "Pardeep Sharma") <br/>
