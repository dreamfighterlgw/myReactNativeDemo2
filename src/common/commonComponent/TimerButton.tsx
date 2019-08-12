import PropTypes from 'prop-types';
import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';

export default class TimerButton extends React.Component {
  constructor(props:any) {
   super(props)
    this.state = {
      timerCount: this.props.timerCount || 90,    //记时器，初始值为90，倒计时。
      timerTitle: this.props.timerTitle || '获取验证码',
      counting: false,  //是否开始计时
      selfEnable: true,//  
    };
    this._shouldStartCountting = this._shouldStartCountting.bind(this)  
    this._countDownAction = this._countDownAction.bind(this)
  }


  static propTypes = {
   style: PropTypes.object,
   textStyle: PropTypes.string,
   onClick: PropTypes.func,
   disableColor: PropTypes.string,
   timerTitle: PropTypes.string,
   enable: PropTypes.oneOfType([PropTypes.bool,PropTypes.number])
  };
 
  _countDownAction(){
    const codeTime = this.state.timerCount;

    this.interval = setInterval(() =>{
      const timer = this.state.timerCount - 1
      if(timer===0){
        this.interval&&clearInterval(this.interval);
        this.setState({
          timerCount: codeTime,
          timerTitle: this.props.timerTitle || '获取验证码',
          counting: false,
          selfEnable: true
        })
      }else{
        console.log("---- timer ",timer);
        this.setState({
          timerCount:timer,
          timerTitle: `重新获取(${timer}s)`,
        })
      }
    },1000)
  }
  
  _shouldStartCountting(shouldStart){
    if (this.state.counting) {return}
    if (shouldStart) {
      this._countDownAction()
      this.setState({counting: true,selfEnable:false})
    }else{
      this.setState({selfEnable:true})
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }
  
  render(){
    const {onClick,style,textStyle,enable,disableColor} = this.props
    const {counting,timerTitle,selfEnable} = this.state
    return (
      <TouchableOpacity activeOpacity={counting ? 1 : 0.8} onPress={()=>{
        if (!counting && enable && selfEnable) {
          this.setState({selfEnable:false})
          this.props.onClick(this._shouldStartCountting)
        };
      }}>
        <View style={[{width:100, height:44,flex:1,justifyContent:'center',alignItems:'center'},style]}>
          <Text style={[{fontSize: 16},textStyle,{color: ((!counting && enable && selfEnable) ? textStyle.color : disableColor || 'gray')}]}>{timerTitle}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}
/**
 * 使用
<TimerButton enable={phoneNumber.length}
  style={{width: 110,marginRight: 10}}
  textStyle={{color: StaticColor.COLOR_MAIN}}
  timerCount={10}
  onClick={(shouldStartCountting)=>{
    this._requestSMSCode(shouldStartCountting)
  }}/>
onClick：触发后按钮selfEnable会立即被置为false
通过onClick中的一系列逻辑处理之后需要调用回调函数结束倒计时
shouldStartCountting：回调函数，接受一个Bool类型的参数
shouldStartCountting(true)，开始倒计时，倒计时结束时自动恢复初始状态
shouldStartCountting(false)， 按钮的selfEnable会立即被置为true
 */