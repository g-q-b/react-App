import React from 'react'
import {Link} from 'react-router-dom'
import './Car.css'
import axios from 'axios'


export default class Car extends React.Component{
    
    state={
        list:[]
    }
    
    componentDidMount(){
        axios({
            url:'/data/car.json'
        }).then(
            res=>this.setState({list:res.data})
            )
    }
        
    render(){
        let {list} = this.state
        return (
            <div className='Car'>
                {
                    list.map(item=>(
                        <div className='Car_div1'>
                            <Link to='/Detail'>
                                <img src={item.src} className='Car_img'/>
                                <h4 className='Car_h4'>{item.title}</h4>
                                <p className='Car_p'>{item.des}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

