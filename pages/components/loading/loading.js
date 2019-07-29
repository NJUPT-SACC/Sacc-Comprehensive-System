import React from 'react'

import './loading.less'

class Loading extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.$_canvas = this.canvas
    var canvas = this.$_canvas;
    var ctx = canvas.getContext("2d");
    let timeS = 0,timeA1 = 0,timeA2 = 0,timeA3 = 0,timeC1 = 0,timeC2 = 0;
    var wid=window.innerWidth*this.props.scale;
    var hei=window.innerHeight*this.props.scale;
    canvas.style.width=wid+"px";
    canvas.style.height=hei+"px";
    ctx.lineWidth = 20;
    ctx.strokeStyle = "#000";
    ctx.shadowBlur=10;
    ctx.shadowColor="#fff";
    ctx.lineJoin="round";
    ctx.lineCap="round";
    let drawS = setInterval(()=>{
      if((0.35+timeS*0.05)>=1.8){
        clearInterval(drawS);
      }else{
        ctx.shadowBlur=0;
        ctx.lineWidth = 15 + timeS*0.8;
        ctx.beginPath();
        ctx.arc(400,400,100,(0.3+timeS*0.05)*Math.PI,(0.35+timeS*0.05)*Math.PI);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(400,550,100,(1.3+timeS*0.05)*Math.PI,(1.35+timeS*0.05)*Math.PI);
        ctx.stroke();
        timeS++;
      }
    },50)
    let drawA = setInterval(()=>{
      ctx.lineWidth = 25;
      if((650-(timeA1+1)*10*350/150)>=300&&(600+(timeA1+1)*10)<=750){
        ctx.beginPath();
        ctx.moveTo(600+timeA1*10,650-timeA1*10*350/150);
        ctx.lineTo(600+(timeA1+1)*10,650-(timeA1+1)*10*350/150);
        ctx.stroke();
        timeA1++;
      }else if((750+(timeA2+1)*10)<=900&&(300+(timeA2+1)*10*350/150)<=650){
        ctx.beginPath();
        ctx.moveTo(750+timeA2*10,300+timeA2*10*350/150);
        ctx.lineTo(750+(timeA2+1)*10,300+(timeA2+1)*10*350/150);
        ctx.stroke();
        timeA2++;
      }else{
        if(695 + timeA3*15>=820){
          clearInterval(drawA);
        }else{
           ctx.beginPath();
          ctx.moveTo(680 + timeA3*15,480);
          ctx.lineTo(695 + timeA3*15,480);
          ctx.stroke();
          timeA3++;
        }
       
      }
      
    },50)
    let drawC1 = setInterval(()=>{
      if((0.35+timeC1*0.05)>=1.7){
        clearInterval(drawC1);
      }
      ctx.shadowBlur=0;
      ctx.lineWidth = 15 + timeS*0.8;
      ctx.beginPath();
      ctx.arc(1100,475,175,(0.3+timeC1*0.05)*Math.PI,(0.35+timeC1*0.05)*Math.PI);
      ctx.stroke();
      timeC1++;
    },50)
    let drawC2 = setInterval(()=>{
      if((0.35+timeC2*0.05)>=1.7){
        clearInterval(drawC2);
      }
      ctx.shadowBlur=0;
      ctx.lineWidth = 15 + timeS*0.8;
      ctx.beginPath();
      ctx.arc(1475,475,175,(0.3+timeC2*0.05)*Math.PI,(0.35+timeC2*0.05)*Math.PI);
      ctx.stroke();
      timeC2++;
    },50)
    setInterval(()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height);
      timeS = 0,timeA1 = 0,timeA2 = 0,timeA3 = 0,timeC1 = 0,timeC2 = 0;
      let drawS = setInterval(()=>{
        if((0.35+timeS*0.05)>=1.8){
          clearInterval(drawS);
        }else{
          ctx.shadowBlur=0;
          ctx.lineWidth = 15 + timeS*0.8;
          ctx.beginPath();
          ctx.arc(400,400,100,(0.3+timeS*0.05)*Math.PI,(0.35+timeS*0.05)*Math.PI);
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(400,550,100,(1.3+timeS*0.05)*Math.PI,(1.35+timeS*0.05)*Math.PI);
          ctx.stroke();
          timeS++;
        }
      },50)
      let drawA = setInterval(()=>{
        ctx.lineWidth = 15;
        if((650-(timeA1+1)*10*350/150)>=300&&(600+(timeA1+1)*10)<=750){
          ctx.beginPath();
          ctx.moveTo(600+timeA1*10,650-timeA1*10*350/150);
          ctx.lineTo(600+(timeA1+1)*10,650-(timeA1+1)*10*350/150);
          ctx.stroke();
          timeA1++;
        }else if((750+(timeA2+1)*10)<=900&&(300+(timeA2+1)*10*350/150)<=650){
          ctx.beginPath();
          ctx.moveTo(750+timeA2*10,300+timeA2*10*350/150);
          ctx.lineTo(750+(timeA2+1)*10,300+(timeA2+1)*10*350/150);
          ctx.stroke();
          timeA2++;
        }else{
          if(695 + timeA3*15>=820){
            clearInterval(drawA);
          }else{
             ctx.beginPath();
            ctx.moveTo(680 + timeA3*15,480);
            ctx.lineTo(695 + timeA3*15,480);
            ctx.stroke();
            timeA3++;
          }
         
        }
        
      },50)
      let drawC1 = setInterval(()=>{
        if((0.35+timeC1*0.05)>=1.7){
          clearInterval(drawC1);
        }
        ctx.shadowBlur=0;
        ctx.lineWidth = 15 + timeS*0.8;
        ctx.beginPath();
        ctx.arc(1100,475,175,(0.3+timeC1*0.05)*Math.PI,(0.35+timeC1*0.05)*Math.PI);
        ctx.stroke();
        timeC1++;
      },50)
      let drawC2 = setInterval(()=>{
        if((0.35+timeC2*0.05)>=1.7){
          clearInterval(drawC2);
        }
        ctx.shadowBlur=0;
        ctx.lineWidth = 15 + timeS*0.8;
        ctx.beginPath();
        ctx.arc(1475,475,175,(0.3+timeC2*0.05)*Math.PI,(0.35+timeC2*0.05)*Math.PI);
        ctx.stroke();
        timeC2++;
      },50)
    },3000)
  }

  render() {
    const style = {
      width:`${this.props.width}vw`,
      height:`${this.props.height}vh`
    }
    return (
      <div className="Loading_wrapper" style={style}>
        <canvas id="Loading-canvas" ref={ref => this.canvas = ref} width={1900} height={900}></canvas>
      </div>
    )
  }
}

export default Loading