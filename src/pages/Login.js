import React from 'react'
import {link} from 'react-router-dom'
import ReactDOM from 'react-dom'
import axios from 'axios'
import { Button } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import './Login.css'

export default class Login extends React.Component{

    constructor(){
        super();
        console.log(this)
        this.state={
            username:'',
            password:'',
            mess:''
        }
    }    

    send = () => {
        axios({
            url:'/mock/login',
            params:{username:this.state.username,password:this.state.password}
        }).then(
            res => console.log(res.data)
            // res => {
            //     if(res.data.err===0){
            //         alert('denglu成功')
            //         this.props.history.push('/user')
            //     } else {
            //         this.setState({mess:res.data.msg})
            //     }
            // }
        )
    }
   
    render(){
        let {username,password} = this.state
        return (
            <div className='Login'>
              {/* <input type='button' value='<' onClick={()=>this.props.history.go(-1)}/> */}
              <img src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4039424329,4157232120&fm=26&gp=0.jpg' className='Login_img'/><br/>  
              <span className='Login_span'>用户名：</span><input type='text' className='Login_text' value={username}/><br/>  
              <span className='Login_span'>密 码：</span><input type='text' className='Login_text' value={password}/><br/>
              <input type='button' value='登陆' className='Login_button' onClick={this.send}/>
              <input type='button' value='注册' className='Login_button'/>
            </div>
        )
    }
}  