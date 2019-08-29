import React from 'react'
import './Follow.css'
import axios from 'axios'
import Cell from '../components/Cell';


export default class Follow extends React.Component{

    state={
        list:[]
    }

    componentDidMount(){
        axios({
            url:`/data/follow.json`
        }).then(
            res=>this.setState({list:res.data})
        )
    }

    render(){
        let {list} = this.state
        return (
            <div className='Follow'>
                {
                    list.map(item=>(
                        <Cell key={item.id} link item={item} dataName='column'/>
                    ))
                }
            </div>
        )
    }
}
