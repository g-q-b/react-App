import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import './Detail.css'
import axios from 'axios'
import { PullToRefresh } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

export default class Detail extends React.Component{

    state={
        refreshing: false,
        down: true,
        height: document.documentElement.clientHeight,
        list:[]
    }

    componentDidMount(){

        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
          height: hei,
        //   list: genData()
        }), 0);

        axios({
            url:'/data/detail.json'
        }).then(
            res=>this.setState({list:res.data})
            )
    }
        
    render(){
        let {list} = this.state
        return (
            <div className='Detail'>
                <PullToRefresh
                    damping={60}
                    ref={el => this.ptr = el}
                    style={{
                    height: this.state.height,
                    overflow: 'auto',
                    }}
                    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
                    direction={this.state.down ? 'down' : 'up'}
                    refreshing={this.state.refreshing}
                    onRefresh={() => {
                    this.setState({ refreshing: true });
                    setTimeout(() => {
                        this.setState({ refreshing: false });
                    }, 1000);
                    }}
                >
                    {
                        list.map(item=>(
                            <div className='Detail_div1'>
                                <Link to='/Detail'>
                                    <img src={item.src} className='Detail_img'/>
                                    <h4 className='Detail_h4'>{item.title}</h4>
                                    <p className='Detail_p'>{item.des}</p>
                                </Link>
                            </div>
                        ))
                    }
                </PullToRefresh>   
            </div>
        )    
}

}