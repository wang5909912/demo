import React, { Component } from 'react';
import "./homepage.css"
import { Layout,Icon } from 'antd';
// import LeftMenu from '../leftaside/leftaside'

const { Header} = Layout;

class Homepage extends Component {
  constructor(props){
    super(props);
    this.state={
      clienheight:window.innerHeight
    }
  }

  resize=(obj)=>{
    var _this = this
    window.onresize=function(){
      if(window.innerHeight !== obj){
        _this.setState({
          clienheight:window.innerHeight
        })
      }
      
  }
}
  componentDidMount(){
    this.resize(this.state.clienheight);
  }

  render() {
    console.log(this.state.clienheight)
    console.log()
    return (
      <Layout className="home_box">
        <Header className="home_nav">
          <div className="nav_logo">
            <div className="logo_size">
              <img src="" alt=""/>
            </div>
          </div>
          <div className="nav_content">
            <ul className="content_ul">
              <li>首页</li>
              <li className="ul_hover">代理管理</li>
              <li>店铺管理</li>
              <li>订单管理</li>
              <li>用户管理</li>
              <li>财务管理</li>
            </ul>
            <div className="content_head">
              <img src="" alt=""/>
              <Icon type="caret-down" className="conten_head_icon"/>
            </div>
            <div className="content_emailsourch">

            </div>
          </div>
          <div className="nav_end">
            <div className="end_div">
              <img src="" alt=""/>
            </div>
          </div>
        </Header>
        <div className="home_lsider" style={{height:this.state.clienheight+'px'}}>
          <div className="sider_secondNav">
            <ul>
              <li>
                <div>
                  <img src="" alt=""/>
                  <p>收益</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="" alt=""/>
                  <p>账单</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="" alt=""/>
                  <p>发票</p>
                </div>
              </li>
              <li>
                <div>
                  <img src="" alt=""/>
                  <p>审核</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="sider_thirdNav">

          </div>
        </div>
      </Layout>
    );
  }
}

export default Homepage;
