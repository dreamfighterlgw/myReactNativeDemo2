
import React, { Component } from "react";
import { View, Image,StyleSheet} from "react-native";



export default class Security extends Component{
    render(){
        return(
            <View  style={styles.container}>
                <Image   source={require('./images/securityAnbao.png')} style={{width:200,height:213}}  />
            </View>
        )
    }
}





const styles = StyleSheet.create({
    container: {      
      backgroundColor: '#FFFFFF', 
      marginLeft:0,
      marginRight:0,
      marginBottom:0,
      marginTop:0,
              
    },
    img: {width: 40,
         height: 40,
        },
    
  });




/* <html>
<head>
<title>未标题-2</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
</head>
<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<!-- Save for Web Slices (未标题-2) -->
<img src="images/SECURIT.png" width="137" height="99" alt="">
<!-- End Save for Web Slices -->
</body>
</html> */