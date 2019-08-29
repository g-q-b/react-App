import React from 'react'
import ReactDOM from 'react-dom'
import {Route,NavLink,Link,Switch,Redirect} from 'react-router-dom'
import Home from '../pages/Home'
import Column from '../pages/Column'
import Follow from '../pages/Follow'
import Error from '../pages/Error'

import './Header.css'

export default class Header extends React.Component{

    
    render(){
        return (
            <div className='Header'>
                <ul className='Header_ul'>
                        <li><Link to='/home' className='Header_li'>中国华东</Link></li>
                        <li><Link to='/column' className='Header_li'>江淮之滨</Link></li>
                        <li><Link to='/follow' className='Header_li'>中国地理</Link></li>
                </ul>
            </div>
        )
    }
}