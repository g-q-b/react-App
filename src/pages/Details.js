import React from 'react'
import ReactDOM from 'react-dom'
import './Details.css'
import querystring from 'query-string'
import axios from 'axios'
import { Menu, ActivityIndicator, NavBar, PullToRefresh, Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'

const data = [
    {
      value: '1',
      label: '安徽',
      children: [
        {
          label: '合肥',
          value: '1',
          disabled: false,
        },
        {
          label: '芜湖',
          value: '2',
        }, {
          label: '蚌埠',
          value: '3',
        }, {
          label: '淮南',
          value: '4',
        }, {
          label: '马鞍山',
          value: '5',
        }, {
          label: '淮北',
          value: '6',
        }, {
          label: '铜陵',
          value: '7',
        }, {
          label: '安庆',
          value: '8',
        }, {
          label: '黄山',
          value: '9',
        }, {
          label: '阜阳',
          value: '10',
        }],
    }, {
      value: '2',
      label: '江苏',
      children: [
        {
          label: '南京',
          value: '1',
        }, {
          label: '无锡',
          value: '2',
          disabled: true,
        }, {
          label: '徐州',
          value: '3',
        }, {
          label: '常州',
          value: '4',
        }],
    },
    {
      value: '3',
      label: '浙江',
      isLeaf: false,
      children: [
        {
          label: '杭州',
          value: '1',
        },
    ],
},
];

function loadingToast() {
    Toast.loading('Loading...', 1, () => {
    console.log('Load complete !!!');
    });
}

export default class Details extends React.Component{

    state={
        refreshing: false,
        down: true,
        height: document.documentElement.clientHeight,
        initData: '',
        show: false,
        data:[]
    }


    onChange = (value) => {
        console.log(value);
      }
      onOk = (value) => {
        console.log(value);
        this.onCancel();
      }
      onCancel = () => {
        this.setState({ show: false });
      }
      handleClick = (e) => {
        e.preventDefault(); // Fix event propagation on Android
        this.setState({
          show: !this.state.show,
        });
        // mock for async data loading
        if (!this.state.initData) {
          setTimeout(() => {
            this.setState({
              initData: data,
            });
          }, 500);
        }
      }
    
      onMaskClick = () => {
        this.setState({
          show: false,
        });
      }

    componentDidMount(){

        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
          height: hei,
        //   list: genData()
        }), 0);

        console.log(this.props)
        let id = 1;
        // let id = querystring.parse(Id.value)
        let dataName = querystring.parse(this.props.location.search).dataName;
        // console.log(id,dataName)
        axios({
            url:`/data/home.json`
        }).then(
            res => this.setState({data:res.data})
            // res=>console.log(res.data)
        )

        Toast.loading('Loading...', 30, () => {
            console.log('Load complete !!!');
          });
      
          setTimeout(() => {
            Toast.hide();
          }, 3000);
    }


    render(){
        let {data,initData,show} = this.state
        const menuEl = (
            <Menu
              className="multi-foo-menu"
              data={initData}
              value={['1', ['3', '4']]}
              onChange={this.onChange}
              onOk={this.onOk}
              onCancel={this.onCancel}
              height={document.documentElement.clientHeight * 0.6}
              multiSelect
            />
          );
          const loadingEl = (
            <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
              <ActivityIndicator size="large" />
            </div>
          );
      
        return (
            <div className='Details'>
                <div className={show ? 'multi-menu-active' : ''}>
                    <div>
                    <NavBar
                        leftContent="菜单"
                        mode="light"
                        onLeftClick={this.handleClick}
                        className="multi-top-nav-bar"
                    >
                        请选择城市
                    </NavBar>
                    </div>
                    {show ? initData ? menuEl : loadingEl : null}
                    {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
                </div>
 
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
                        data.map(item=>(
                            <div>
                                <h3 className='Details_h3' onClick={loadingToast}>{item.title}</h3>
                                <h2 className='Details_h2'>{item.des}</h2>
                            </div>
                        ))
                    }
                </PullToRefresh>
            </div>
        )
    }
}