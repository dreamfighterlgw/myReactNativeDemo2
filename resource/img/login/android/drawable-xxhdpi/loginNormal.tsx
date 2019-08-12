import { Component } from "react";
import { View, StyleSheet, ImageBackground, Image, TextInput, Button } from "react-native";
import React from "react";




export default class LoginNormal extends Component{
    //定义属性值
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            verifyCode:'',
        }

    }

    
    //return的HTML必须包含在<View></View>中
    render(){
        return( 
          <ImageBackground source={require('./images/bgStar.png')} style={[styles.container,styles.img]}>
                
                    <Image  source={require('./images/securityAnbao.png')} style={{width: 200,  height: 210,marginTop:210}}></Image>
                    
                    <View  style={[styles.inputBlock]} >
                        <ImageBackground source={require('./images/loginUser.png')} style={styles.singeInput}>
                            <TextInput placeholder='请输入用户账号' style={styles.inputContent}  onChangeText={(username) => this.setState({username})}
                                value={this.state.username} clearTextOnFocus={true} autoFocus={true} placeholderTextColor='#999'
                                selectionColor='#ff4f39' ></TextInput>
                          
                        </ImageBackground>

                        <ImageBackground source={require('./images/login-pass.png')} style={styles.singeInput}>
                            <TextInput placeholder='请输入密码'  secureTextEntry={true}  style={styles.inputContent}
                            keyboardType={'default'} clearTextOnFocus={true}></TextInput>
                        </ImageBackground>

                        <Image source={require('./images/login-forgetPass.png')} style={{width: 172,  height: 45,marginLeft:160,paddingRight:0,marginTop:-12,marginBottom:-12}} />
                        
                        <ImageBackground source={require('./images/login-verifyCode.png')} style={styles.singeInput}>
                            <TextInput placeholder='请输入验证码'  secureTextEntry={true}  style={styles.inputContent}
                            keyboardType={'default'} clearTextOnFocus={true}></TextInput>
                        </ImageBackground >

                        <ImageBackground source={require('./images/login-loginButton.png')} style={{width: 77,  height: 35, marginLeft:125,marginTop:-5,marginBottom:-12}}>
                            <Button
                            onPress={onPressLearnMore}
                            title="提交"
                            color="#841584"
                
                            
                            />
                        </ImageBackground>
                    </View>
                
          </ImageBackground>
            
                          
                      
           
        )
    }
}


function onPressLearnMore(){
    alert("dfdfdfdfddfdf")

}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF' , marginLeft:0, marginTop:0, marginRight:0,marginBottom:0,
       
        flexDirection:'column',
        alignItems:'center',       
        justifyContent:'flex-start',
    },
    img:{
        width:760, height:1280,
        
    },


    inputBlock:{        
            width:338, 
            flexDirection:'column',
            justifyContent:'flex-end',
            marginBottom:0,
            marginTop:80,

    },
    singeInput:{
        width: 337,  height: 48,marginTop:10,marginBottom:10,

    },
    inputContent:{
        marginLeft:30
    }

});