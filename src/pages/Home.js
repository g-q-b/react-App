import React from 'react'
import './Home.css'
import Cell from '../components/Cell';

import ReactSwipe from 'react-swipe'

import axios from 'axios'

// import {Router,NavLink,Link} from 'react-router-dom'

export default class Home extends React.Component{

    state={
        list:[],
        homes:[]
    }

    componentDidMount(){
        axios({
            url:'/data/home.json',
        }).then(
            res=>this.setState({list:res.data}),
            // res=>console.log(res.data)
        )
    }

    render(){
        let {list} = this.state
        return (
            <div className='Home'>
                <ReactSwipe 
                    swipeOptions={{
                        continuous:true,
                        auto:1000,
                        speed:100
                    }}
                >
                    <div className='div1'></div>
                    <div className='div2'></div>
                    <div className='div3'></div>
                </ReactSwipe>

                {
                    list.map(item=>(
                        <Cell key={item.id} link item={item} dataName='home'/>
                    ))
                }

            </div>
        )
    }
}