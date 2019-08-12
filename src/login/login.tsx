import React, { Component } from "react";
import { View, Image, StyleSheet, TextInput,Text } from "react-native";
//import { Icon } from "react-native-vector-icons/Icon";
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';


export default class Login extends Component{
    render(){
        return(
            <View style={{flexDirection:'column',justifyContent :'space-evenly',alignItems:'center'}}>
                <View  style={styles.style_image}>  
                  <Image  source={require('../../resource/img/qq.jpg')} />
                </View>
                <Text style = {styles.style_font }> LOGIN</Text>
                <View  style={styles.style_user_input} >
                  <Icon     style={{marginLeft:-11}}  name='user'       size={24}      color='green'    />  
                  <TextInput  style={styles.style_text}                   
                    placeholder='QQ号/手机号/邮箱' 
                    numberOfLines={1}
                    autoFocus={false}
                    underlineColorAndroid={'transparent'}
                    textAlignVertical='center'
                    clearTextOnFocus = {true}
                  />
                 </View>
                 
                 <View  style={styles.style_user_input}>
                  <Icon     style={{marginLeft:-11}}  name='lock'     size={24}      color='green'    />  
                  <TextInput       style={styles.style_text}              
                    placeholder='password/密码' 
                    numberOfLines={1}
                    autoFocus={false}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    textAlignVertical='center'
                    keyboardType='numeric'
                    keyboardAppearance='light'
                    clearButtonMode='always'
                    clearTextOnFocus = {true}
                  />
                 </View>

                 <View style={styles.style_user_input}> 
                     <Input placeholder='please input the verify code'
                        leftIcon={<Icon name='user'style={{marginLeft:-11}} size={24} color='green' />}
                        
                     ></Input>
                 </View>

                <View  style={{height:1,backgroundColor:'#f4f4f4'}}>

                </View>
            </View>    
        )
    }
}

const styles = StyleSheet.create(
    {
        style_font:{
            fontSize:32,
            color:'blue'

        },
        style_image:{
            
            borderRadius:15,  
            height:20 ,       
            width:20,
            marginTop:20,
            padding:40,
            marginBottom:80,  
            justifyContent:'center',          
            alignItems:'center',
           
        },
        style_user_input:{
            backgroundColor:'gray',
            borderRadius:10,
            height:30 ,
            width:200,
            marginTop:5,
            marginBottom:5,
            textAlign : 'center',
           // alignItems:'center',
           flexDirection:'row',
           justifyContent:'center'
        },
        style_text:{
            width:150,
        
        }
    }
)