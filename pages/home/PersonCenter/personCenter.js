import React from 'react';
import { connect } from 'react-redux';
import Head from './components/head';
import Navigation from '../HomePage/components/Navigation';
import './less/personCenter.less';
import Foot from '../HomePage/components/Footer';
import SlideBar from './components/slideBar';
import PcHome from './components/PcHome';
import { actionCreators, store} from '../store';
import CountPieChart from './components/countPieChart';
import TechnologyStackList from './components/TechnologyStackList';
import Radar from './components/radar';
import BasicInformation from './components/BasicInformation'
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
                    return <CountPieChart content={this.props.show}/>
                  case '技术栈':
                      return <TechnologyStackList content={this.props.show}/>
                  case '基本资料':	
                      return <BasicInformation content={this.props.show}/>	
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