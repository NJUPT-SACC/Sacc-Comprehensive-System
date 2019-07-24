import React from 'react';
import { connect } from 'react-redux';
import Head from './components/head';
import Navigation from '../HomePage/components/Navigation';
import './less/personCenter.less';
import Foot from '../HomePage/components/Footer';
import SlideBar from './components/slideBar';
import PcHome from './components/PcHome';
import { actionCreators, store} from '../store';
class PersonCenter extends React.Component{
	
	render(){
		return (
            <div className="personCenter">
              <div className="PcNav">
                <Navigation />
              </div>
                <Head />
                <div className="PcContent">
                <SlideBar />
                {(()=>{
                switch(this.props.show){
                  case '首页':
                    return <PcHome  content={this.props.show}/>
                  case '刷题':
                  case '技能雷达':
                  case '技能栈':
                  case '基本资料':		
                  case '设置':	
                  }
                })()}
                </div>
                <div className="PcFoot">
                  <Foot />
                </div>
            </div>
		);
	}
}
const mapStateToProps = (state) =>{
	return {
		show: state.getIn(['home','show'])
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(PersonCenter);