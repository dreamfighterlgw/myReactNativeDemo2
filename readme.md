#1.生成原生态的app
##Installing dependencies
###Node, Python2, JDK
choco install -y nodejs.install python2 jdk8
###The React Native CLI
npm install -g react-native-cli
###Android development environment
(1). Install Android Studio
Download and install Android Studio. Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

Android SDK
Android SDK Platform
Performance (Intel ® HAXM) (See here for AMD)
Android Virtual Device
Then, click "Next" to install all of these components.

If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

2. Install the Android SDK
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 9 (Pie) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

Android Studio Welcome

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:

Android SDK Platform 28
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 28.0.3 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

3. Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Open the System pane under System and Security in the Windows Control Panel, then click on Change settings.... Open the Advanced tab and click on Environment Variables.... Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK:

ANDROID_HOME Environment Variable

The SDK is installed, by default, at the following location:

c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk
You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.

Open a new Command Prompt window to ensure the new environment variable is loaded before proceeding to the next step.

4. Add platform-tools to Path
Open the System pane under System and Security in the Windows Control Panel, then click on Change settings.... Open the Advanced tab and click on Environment Variables.... Select the Path variable, then click Edit. Click New and add the path to platform-tools to the list.

The default location for this folder is:

c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools

##Creating a new application
react-native init AwesomeProject
###specify the version
react-native init AwesomeProject --version X.XX.X
react-native init AwesomeProject --version react-native@next
###run the app
   //start my simulator 
react-native run-android


#在ReactNative中使用Typescript
安装typescript依赖

yarn add typescript tslint -D
yarn add @types/react @types/react-native @types/react-dom -D
5.安装其他依赖

yarn add concurrently rimraf -D
yarn add ts-jest @types/jest @types/react-test-renderer -D
6.在你的项目根目录下创建一个tsconfig.json文件,将以下代码复制进去即可

{
    "compilerOptions": {
        "module":"es2015",
        "target": "es2015",
        "jsx": "react",
        "rootDir": "src",
        "outDir": "build",
        "allowSyntheticDefaultImports": true,
        "noImplicitAny": true,
        "sourceMap": true,
        "experimentalDecorators": true,
        "preserveConstEnums": true,
        "allowJs": true,
        "noUnusedLocals": true,
        "noUnusedParameters": true,
        "noImplicitReturns": true,
        "skipLibCheck": true,
        "moduleResolution":"Node"
    },
    "filesGlob": [
        "typings/index.d.ts",
        "src/**/*.ts",
        "src/**/*.tsx",
        "node_modules/typescript/lib/lib.es6.d.ts"
    ],
    "types": [
      "react",
      "react-dom",
      "react-native"
    ],
    "exclude":[
        "build", 
        "node_modules",
        "jest.config.js",
        "App.js"
        
    ],
    "compileOnSave": false
}
7.安装react-native-scripts

yarn add react-native-scripts
8.将package.json中的"scripts"配置清空，并将以下代码替换

"scripts": {
    "start": "react-native-scripts start",
    "eject": "react-native-scripts eject",
    "android": "react-native-scripts android",
    "ios": "react-native-scripts ios",
    "test": "node node_modules/jest/bin/jest.js",
    "lint": "tslint src/**/*.ts",
    "tsc": "tsc",
    "clean": "rimraf build",
    "build": "yarn run clean && yarn run tsc --",
    "watch": "yarn run build -- -w",
    "watchAndRunAndroid": "concurrently \"yarn run watch\" \"yarn run android\"",
    "buildRunAndroid": "yarn run build && yarn run watchAndRunAndroid ",
    "watchAndRunIOS": "concurrently \"yarn run watch\" \"yarn run ios\"",
    "buildRunIOS": "yarn run build && yarn run watchAndRunIOS ",
    "watchAndStart": "concurrently \"yarn run watch\" \"yarn run start\"",
    "buildAndStart": "yarn run build && yarn run watchAndStart "
  }
9.将package.json中的"main"配置清空，并将以下代码替换

"main": "./node_modules/react-native-scripts/build/bin/crna-entry.js"
10.将App.js中代码清空，并将以下代码替换

import App from './build/App';
export default App;
11.创建一个src文件夹，将babel.config.js文件放在src文件夹下，同时在src文件夹下创建一个App.tsx文件，App.tsx文件中代码如下

import React, { Component } from "react"
import { View, Text } from "react-native"

export default class App extends Component {
  render() {
    return(
      <View>
        <Text>不成功加我qq:291678978，手把手教学好吧</Text>
      </View>
    )
  }
}
12.执行命令：yarn buildAndStart，然后静静的等待运行成功，用你伟大的expo扫描成功的二维码就可以看到伟大的胜利；注：如果想在浏览器看到你的二维码，可再单独执行一下yarn start

然后就可以很开心的在项目里写TypeScript代码了，例如项目中tsx目录下有test.tsx文件，我们在import这个文件时，就像import一个js文件就可以了(注：ts文件后缀名ts和tsx都可以，不过在当前环境下后缀名写成ts好像有问题，如果有问题的话将后缀名改成tsx即可，亲测有效)

import './tsx/test'


#react-native-elements
npm i react-native-elements --save

#install webpack
 ##先全局安装：   
 npm install -g webpack

##然后项目安装 ： 
npm install  webpack --save-dev



#[ts]无法找到模块“react-native”的声明文件
无法找到模块“react-native”的声明文件。“e:/guowei_develop/reactNativeProject/myReactNativeDemo/node_modules/react-native/Libraries/react-native/react-native-implementation.js”隐式拥有 "any" 类型。
  尝试 "npm install @types/react-native" (如果存在)，或者添加一个包含“声明模块‘react-native’”的新声明文件(.d.ts)；

##解决：
发现tsconfig.json中有
 "filesGlob": [
        "typings/index.d.ts",
        //在项目下新建一个目录"src"，typescripe源代码就放在这里
        "src/**/*.ts",
        "src/**/*.tsx",
        "node_modules/typescript/lib/lib.es6.d.ts"
    ],
    新建：src 问题解决。

