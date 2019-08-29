import React from 'react'
import {Link} from 'react-router-dom'
import './Main.css'
import axios from 'axios'


export default class Main extends React.Component{

    
    state={
        list:[]
    }
    
    componentDidMount(){
        axios({
            url:'/data/main.json'
        }).then(
            res=>this.setState({list:res.data})
            )
    }
        
    render(){
        let list = this.state.list
        return (
            <div className='Main'>
                {
                    list.map(item=>(
                        <div className='Main_div1'>
                            <Link to='/Detail'>
                                <img src={item.src} className='Main_img'/>
                                <h4 className='Main_h4'>{item.title}</h4>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

