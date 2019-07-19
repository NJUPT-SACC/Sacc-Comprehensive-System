import React from 'react';
import { connect } from 'react-redux';
import { actionCreators, store} from './store';
import HomePage from './HomePage/HomePage';
import PersonCenter from './PersonCenter/personCenter';

class Home extends React.Component{
	render(){
		return (
      <div>
        <ul>
          <li onClick={(e) => {this.props.changeShow(e)}} className="homepages">
            主页
          </li>
          <li onClick={(e) => {this.props.changeShow(e)}} className="person">
            个人中心
          </li>
        </ul>
          {(()=>{
          switch(this.props.show){
            case 'homepages':
              return <HomePage content={this.props.show}/>
            case 'person':	
              return <PersonCenter content={this.props.show}/>
            default:
              return false;
          }
          })()}
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
		changeShow(e){
			dispatch(actionCreators.changeShow(e.target.className))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
