import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'

export default class Footer extends React.Component{
    render(){
        return (
            <div className='footer'>
                <ul className='footer_ul'>
                    <li>
                        <Link to='/main' className='footer_li'>
                            首页
                        </Link>
                    </li>
                    <li>
                        <Link to='/case' className='footer_li'>
                            摄影
                        </Link>
                    </li>
                    <li>
                        <Link to='/car' className='footer_li'>
                            分享
                        </Link>
                    </li>
                    <li>
                        {/* <router-link to='/user' tag='li'> */}
                            <Link to='/login' className='footer_li'>我的</Link>
                        {/* </router-link> */}
                    </li>
                </ul>
            </div>
        )
    }
}