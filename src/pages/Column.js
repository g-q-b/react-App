import React from 'react'

import './Column.css'

import Cell from '../components/Cell';

import axios from 'axios'

export default class Column extends React.Component{
    state={
        list:[]
    }

    componentDidMount(){
        axios({
            url:'/data/column.json',
        }).then(
            res=>this.setState({list:res.data}),
            // res=>console.log(res.data)
        )
    }


    render(){
        let {list} = this.state
        return (
            <div className='Column'>
                {
                    list.map(item=>(
                        <Cell key={item.id} link item={item} dataName='column'/>
                    ))
                }

            </div>
        )
    }
}
