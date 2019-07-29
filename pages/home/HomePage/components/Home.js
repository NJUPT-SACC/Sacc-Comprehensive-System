import React from 'react';
import GroupList from './GroupList';
import Login from './Login';
import '../less/Home.less';
import ParticleCanvas from './particle'
class Home extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      activeColor:'#fff'
    }
    this.LoginRef = React.createRef();
    this.GroupListRef = React.createRef();
  }

  changeShow = (e) => {
    this.LoginRef.current.classList = '';
    this.GroupListRef.current.classList = '';

    let currentColor = e.target.attributes['color'].value; 
    let newColor = currentColor === "#fff" ? "#000" : "#fff";
    e.target.style.backgroundColor = newColor; 
    e.target.setAttribute('color' , newColor); 

    if(e.target.tabIndex == 1){
      this.LoginRef.current.classList.add('transfromBackBottomShow');
      this.GroupListRef.current.classList.add('transfromBackTopShow');
    }else{
      this.LoginRef.current.classList.add('transfromTopShow');
      this.GroupListRef.current.classList.add('transfromBottomShow');
    }
  }
   
  render() {
    return (
        <div className="HomeLoginPage">
          <ParticleCanvas />
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
              color = {this.state.activeColor}
              ></button>
            </li>
            <li>
              <button 
              onClick={this.changeShow} 
              tabIndex="2"
              color = {this.state.activeColor}
              ></button>
            </li>
          </ul>
        </div>
    );
  }
}

export default Home