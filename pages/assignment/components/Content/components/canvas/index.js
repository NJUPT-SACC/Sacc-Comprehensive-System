import React from 'react'

import './index.less'

class CanvasComponent extends React.Component {

  constructor (props) {
    super(props);
    this.myCanvas = React.createRef()
  }

  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const canvas = this.myCanvas.current;
    const ctx = canvas.getContext('2d'),
      W = canvas.width = window.innerWidth,
      H = canvas.height = window.innerHeight,
      pixels = [];

    for (let x = -300; x < 200; x += 10) {
      for (let z = -250; z < 150; z += 10) {
        pixels.push({x: x, y: 40, z: z});
      }
    }

    function render(ts) {
      let imageData = ctx.getImageData(0, 0, W, H),
        len = pixels.length,
        fov = 250,
        pixel, scale,
        x2d, y2d, c;

      for (let i = 0; i < len; i++) {
        pixel = pixels[i];
        scale = fov / (fov + pixel.z) * 2;
        x2d = pixel.x * scale + W / 2;
        y2d = pixel.y * scale + H / 2.5;
        if(x2d >= 0 && x2d <= W && y2d >= 0 && y2d <= H) {
          c = (Math.round(y2d) * imageData.width + Math.round(x2d)) * 4;
          imageData.data[c] = 160;
          imageData.data[c + 1] = 82;
          imageData.data[c + 2] = 45;
          imageData.data[c + 3] = 255;
        }
        pixel.z -= .4;
        pixel.y = H / 14 + Math.sin(i / len * 15 + (ts / 450)) * 10;
        if (pixel.z < -fov) pixel.z += 2 * fov;
      }
      ctx.putImageData(imageData, 5, 0);
    }

    (function drawFrame(ts){
      requestAnimationFrame(drawFrame, canvas);
      ctx.fillStyle = '#131418';
      ctx.fillRect(0, 0, W, H);
      render(ts);
    }());
  }
  render() {
    return (
      <canvas className="canvas-effect" ref={this.myCanvas}/>
    );
  }
}

export default CanvasComponent