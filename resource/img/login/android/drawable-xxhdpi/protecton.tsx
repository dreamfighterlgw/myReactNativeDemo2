
import React, { Component } from "react";
import { View, Image, StyleSheet} from "react-native";

export default class Protection extends Component{
    render(){
        return(
            <View  style={styles.container}>
               <Image source={require('./images/protection.png')}  style={styles.img} />
          
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF' ,marginLeft:0, marginTop:0, marginRight:0,marginBottom:0,
    },
    img:{
        width:501, height:401,
    }
});



