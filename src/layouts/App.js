import React from 'react'; 
import {Route,Redirect,NavLink,Switch} from 'react-router-dom'
import axios from 'axios'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Home from '../pages/Home'
import Column from '../pages/Column'
import Follow from '../pages/Follow'  
import Details from '../pages/Details'  
import Detail from '../pages/Detail'  
import Main from '../pages/Main'  
import Case from '../pages/Case'  
import Car from '../pages/Car'  
import User from '../pages/User'
import Login from '../pages/Login'
import Error from '../pages/Error'
import '../pages/Home.css'

export default class App extends React.Component{

  // data = ()=>{
  //   axios({
  //     url:`/mock/home`
  //   }).then(
  //     res=>console.log(res)
  //   )
  // }
    

  // address = ()=>{
  //   axios({
  //     url:`/api/home`
  //   }).then(
  //     res=>console.log(res)
  //   )
  // }


  render(){
    return (
      <div>
        <Header></Header>
        
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/column' component={Column} />
            <Route path='/follow' component={Follow} />
            <Route path='/details' component={Details} />
            <Route path='/detail' component={Detail} />
            <Route path='/user' component={User} />
            <Route path='/login' component={Login} />
            <Route path='/main' component={Main} />
            <Route path='/car' component={Car} />
            <Route path='/case' component={Case} />
            <Redirect exact from="/" to="/home" />
            <Route component={Error} />
        </Switch>

        {/* <input type='button' value='mock请求' onClick={this.data}/>
        <input type='button' value='api请求' onClick={this.address}/> */}
        <Footer></Footer>
      </div>
    )
  }
}
