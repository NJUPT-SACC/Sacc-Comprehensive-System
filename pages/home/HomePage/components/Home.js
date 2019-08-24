import React from 'react';
import GroupList from './GroupList';
import Login from './Login';
import '../less/Home.less';
import ParticleCanvas from './particle'
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
   
  render() {
    return (
        <div className="HomeLoginPage">
          <ParticleCanvas />
          {}
          <div ref={this.LoginRef}>
            <Login />
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

export default Home