import React from 'react';
import { connect } from 'react-redux';
import Head from './components/head';
import Navigation from '../HomePage/components/Navigation';
import './less/personCenter.less';
import Foot from './components/foot';
import SlideBar from './components/slideBar';
import PcHome from './components/PcHome';
import { actionCreators, store} from '../store';
import TechnologyStackList from './components/TechnologyStackList';
import Radar from './components/radar';
import BasicInformation from './components/BasicInformation';
import Contact from './components/contact'
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
                  case '技术栈':
                      return <TechnologyStackList content={this.props.show}/>
                  case '基本资料':	
                      return <BasicInformation content={this.props.show}/>	
                  case '联系我们':	
                      return <Contact content={this.props.show} />
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
		show: state.home.show
	}
}
const mapDispatchToProps = (dispatch) => {
	return {

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(PersonCenter);