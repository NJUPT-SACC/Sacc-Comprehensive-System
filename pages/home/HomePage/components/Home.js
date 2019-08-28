import React from 'react';
import GroupList from './GroupList';
import Login from './Login';
import List from './List';
import '../less/Home.less';
import ParticleCanvas from './particle';
import { actionCreators } from '../../store';
import { connect } from 'react-redux';
import Router from 'next/router'
class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      currentIndex: 1
    }
    this.LoginRef = React.createRef();
    this.GroupListRef = React.createRef();
  }

  changeShow = (e) => {
    this.LoginRef.current.classList = '';
    this.GroupListRef.current.classList = '';
    if(e.target.tabIndex == 1){
      this.setState({
        currentIndex:1
      })
      this.LoginRef.current.classList.add('transfromBackBottomShow');
      this.GroupListRef.current.classList.add('transfromBackTopShow');
    }else{
      this.setState({
        currentIndex:2
      })
      this.LoginRef.current.classList.add('transfromTopShow');
      this.GroupListRef.current.classList.add('transfromBottomShow');
    }
  }
   componentDidMount(){
    console.log(Router.router.query)
   }
  render() {
    return (
        <div className="HomeLoginPage">
          <ParticleCanvas />
          <div ref={this.LoginRef}>
          {
              this.props.authKey ? 
                <List />
              :
                <Login /> 
          }
          </div>
          <div ref={this.GroupListRef}>
            <GroupList />
          </div>

          <ul>
            <li>
              <button 
                onClick={this.changeShow}
                tabIndex="1"
                className={this.state.currentIndex === 1 ? 'HomeActive':''}
                style={this.state.currentIndex === 1 ? {opacity:1}:{opacity:0.5}}
              />
            </li>
            <li>
              <button 
                onClick={this.changeShow}
                tabIndex="2"
                className={this.state.currentIndex === 2 ? 'HomeActive':''}
                style={this.state.currentIndex === 2 ? {opacity:1}:{opacity:0.5}}
              />
            </li>
          </ul>
        </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
  authKey: state.home.authKey
  }
}

const mapDispatchToProps = (dispatch) => {
return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);