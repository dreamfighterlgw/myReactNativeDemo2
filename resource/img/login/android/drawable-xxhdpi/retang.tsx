import React, { Component } from "react";
import { View, Image,StyleSheet} from "react-native";



export default class Retangle extends Component{
    render(){
        return(
            <View  style={styles.container}>
                <Image   source={require('./images/retang.png')} style={{width:1125,height:2001}}  />
            </View>
        )
    }
}





const styles = StyleSheet.create({
    container: {      
      backgroundColor: '#FFFFFF', 
      marginLeft:0, 
      marginTop:0,     
    },
    img: {width: 40,
         height: 40,
        },
    
  });




