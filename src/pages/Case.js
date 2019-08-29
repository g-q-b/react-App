import React from 'react'
import {Link} from 'react-router-dom'
import './Case.css'
import axios from 'axios'


export default class Case extends React.Component{

    
    state={
        list:[]
    }
    
    componentDidMount(){
        axios({
            url:'/data/case.json'
        }).then(
            res=>this.setState({list:res.data})
            )
    }
        
    render(){
        let list = this.state.list
        return (
            <div className='Case'>
                {
                    list.map(item=>(
                        <div className='Case_div1'>
                            <Link to='/Detail'>
                                <img src={item.src} className='Case_img'/>
                                <h4 className='Case_h4'>{item.title}</h4>
                            </Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}

