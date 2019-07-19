import React from 'react';
import '../less/logo.less';
import { Icon } from 'antd';
import { LOGO_URL } from '../../store/constants';

class Logo extends React.Component{
  constructor(props){
    super(props);
    console.log(Logo)
  }
  scrollToAnchor = (anchorName) => {
    let anchorElement = document.getElementById(anchorName);
    anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
  }
  render(){
    return (
      <div className="logo">
        <div className="container">
          <img src={ LOGO_URL }></img>
          <button>Learn More</button>
        </div>
        <a onClick={() => this.scrollToAnchor('list')}>
          <Icon type="down"/>
        </a> 
      </div>
    )
  }
}

<style jsx>
  {`.logo{
  height: 100vh;
  width: 98.9vw;
  background: url('https://zos.alipayobjects.com/rmsportal/gGlUMYGEIvjDOOw.jpg') 0 -10vh fixed no-repeat;
  background-size: 100%;
  position: relative;
}
.container{
  position: absolute;
  top: 19%;
  left: 30%;
  width: 40vw;
  position: relative;
}
.container img{
  width: 100%;
  height: 100%;
}
.logo button{ 
  position: absolute;
  bottom: 8%;
  left: 50%;
  background: rgba(0,0,0,0);
  padding: .8rem;
  color: #fff !important;
  font-size: 1rem;
  border: #fff solid 2px;
  border-radius: 5px;
  transform: translateX(-50%);
  cursor: pointer;
}
.logo button:hover{
  box-shadow: 0 0 10px rgba(50,250,255,0.75);
}
.anticon-down{
  font-size: 2rem;
  color:#fff !important;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  animation: shakedown 1s infinite;
}

@keyframes shakedown{
  to{
    bottom: 2%;
  }
}`}
</style>
export default Logo