import {Dimensions,Platform,StatusBar,PixelRatio} from  'react-native';


const {width, height} = Dimensions.get('window');
const  OS = Platform.OS;
const ios = (OS == 'ios');
const android = (OS == 'android');
const  isIPhoneX = (ios && height == 812 && width == 375);
const  statusBarHeight = (ios ? (isIPhoneX ? 44 : 20) : StatusBar.currentHeight);


var globals ={};
//在以下中定义全局变量
globals.gScreen = {
    screen_width:width,
    screen_height:height,
    statusBarHeight:statusBarHeight,
    onePixelRatio:1/PixelRatio.get(),
};

globals.gDevice = {
    ios:ios,
    android:android,
    isIPhoneX:isIPhoneX,
};




export default globals;