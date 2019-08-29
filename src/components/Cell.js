import React from 'react'
import propTypes from 'prop-types'
import './Cell.css'
import {Link} from 'react-router-dom'
import querystring from 'query-string'

export default class Cell extends React.Component{
    render(){
        // console.log(this.props)
        let {item,dataName} = this.props;
        return (
            <div className='Cell'>
                <Link to={{pathname:'/details/'+item.id,search:querystring.stringify({dataName})}}>
                    <h2 className='Cell_h2'>{item.title}</h2>
                    <h3 className='Cell_h3'>{item.des}</h3>
                </Link> 
            </div>
        )
    }
}