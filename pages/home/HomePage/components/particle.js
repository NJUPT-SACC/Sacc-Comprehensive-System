import React from 'react';

class Particle extends React.Component{
  constructor(props){
    super(props)
    this.ParticleRef = React.createRef()
  }

  componentDidMount(){
    this.ParticleCanvas() 
  }

  ParticleCanvas(){

    function Vector(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    }
    
    Vector.prototype = {
      negative: function() {
        return new Vector(-this.x, -this.y, -this.z);
      },
      add: function(v) {
        if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
        else return new Vector(this.x + v, this.y + v, this.z + v);
      },
      subtract: function(v) {
        if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
        else return new Vector(this.x - v, this.y - v, this.z - v);
      },
      multiply: function(v) {
        if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
        else return new Vector(this.x * v, this.y * v, this.z * v);
      },
      divide: function(v) {
        if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y, this.z / v.z);
        else return new Vector(this.x / v, this.y / v, this.z / v);
      },
      equals: function(v) {
        return this.x == v.x && this.y == v.y && this.z == v.z;
      },
      dot: function(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
      },
      cross: function(v) {
        return new Vector(
          this.y * v.z - this.z * v.y,
          this.z * v.x - this.x * v.z,
          this.x * v.y - this.y * v.x
        );
      },
      length: function() {
        return Math.sqrt(this.dot(this));
      },
      unit: function() {
        return this.divide(this.length());
      },
      min: function() {
        return Math.min(Math.min(this.x, this.y), this.z);
      },
      max: function() {
        return Math.max(Math.max(this.x, this.y), this.z);
      },
      toAngles: function() {
        var phi = Math.atan2(this.y, this.x);
        if (phi < 0) {
          phi = phi + Math.PI * 2;
        }
        return {
          theta: Math.acos(this.z / this.length()),
          phi: phi
        };
      },
      angleTo: function(a) {
        return Math.acos(this.dot(a) / (this.length() * a.length()));
      },
      toArray: function(n) {
        return [this.x, this.y, this.z].slice(0, n || 3);
      },
      clone: function() {
        return new Vector(this.x, this.y, this.z);
      },
      init: function(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
      }
    };
    
    Vector.negative = function(a, b) {
      b.x = -a.x;
      b.y = -a.y;
      b.z = -a.z;
      return b;
    };
    Vector.add = function(a, b, c) {
      if (b instanceof Vector) {
        c.x = a.x + b.x;
        c.y = a.y + b.y;
        c.z = a.z + b.z;
      } else {
        c.x = a.x + b;
        c.y = a.y + b;
        c.z = a.z + b;
      }
      return c;
    };
    Vector.subtract = function(a, b, c) {
      if (b instanceof Vector) {
        c.x = a.x - b.x;
        c.y = a.y - b.y;
        c.z = a.z - b.z;
      } else {
        c.x = a.x - b;
        c.y = a.y - b;
        c.z = a.z - b;
      }
      return c;
    };
    Vector.multiply = function(a, b, c) {
      if (b instanceof Vector) {
        c.x = a.x * b.x;
        c.y = a.y * b.y;
        c.z = a.z * b.z;
      } else {
        c.x = a.x * b;
        c.y = a.y * b;
        c.z = a.z * b;
      }
      return c;
    };
    Vector.divide = function(a, b, c) {
      if (b instanceof Vector) {
        c.x = a.x / b.x;
        c.y = a.y / b.y;
        c.z = a.z / b.z;
      } else {
        c.x = a.x / b;
        c.y = a.y / b;
        c.z = a.z / b;
      }
      return c;
    };
    Vector.cross = function(a, b, c) {
      c.x = a.y * b.z - a.z * b.y;
      c.y = a.z * b.x - a.x * b.z;
      c.z = a.x * b.y - a.y * b.x;
      return c;
    };
    Vector.unit = function(a, b) {
      var length = a.length();
      b.x = a.x / length;
      b.y = a.y / length;
      b.z = a.z / length;
      return b;
    };
    Vector.fromAngles = function(theta, phi) {
      return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
    };
    Vector.randomDirection = function() {
      return Vector.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
    };
    Vector.min = function(a, b) {
      return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
    };
    Vector.max = function(a, b) {
      return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
    };
    Vector.lerp = function(a, b, fraction) {
      return b.subtract(a).multiply(fraction).add(a);
    };
    Vector.fromArray = function(a) {
      return new Vector(a[0], a[1], a[2]);
    };
    Vector.angleBetween = function(a, b) {
      return a.angleTo(b);
    };
    
    var util = {
      norm: function(value, min, max) {
        return (value - min) / (max - min);
      },
      lerp: function(norm, min, max) {
        return min + norm * (max - min);
      },
      map: function(value, sourceMin, sourceMax, destMin, destMax) {
        return this.lerp(this.norm(value, sourceMin, sourceMax), destMin, destMax);
      },
      clamp: function(value, min, max) {
        return Math.min(Math.max(value, min), max);
      },
      distance: function(x0, y0, x1, y1) {
        var dx = x0 - x1;
        var dy = y0 - y1;
        return Math.sqrt(dx * dx + dy * dy);
      },
      randomRange: function(min, max) {
        return min + Math.random() * (max - min);
      },
      randomInt: function(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
      },
      degreesToRads: function(degrees) {
        return degress / 180 * Math.PI
      },
      radsToDegrees: function(radians) {
        return radians * 180 / Math.PI;
      },
      roundToPlaces: function(value, places) {
        var mult = Math.pow(10, places);
        return Math.round(value * mult) / mult;
      },
      roundNearest: function(value, nearest) {
        return Math.round(value / nearest) * nearest;
      }
    };
    
    const canvas = this.ParticleRef.current;
    var context = canvas.getContext("2d");
    var width = canvas.width = window.innerWidth;
    var height = canvas.height = window.innerHeight;
    var CenterX = width / 2;
    var CenterY = height / 2;
    
    var dotImageList = [];
    for (var i = 1; i <= 4; i++) {
      var dotImage = new Image();
      dotImage.src = "http://wximg.gtimg.com/tmt/coding-math/dist/img/gatherround/dot" + i + ".png";
      dotImageList.push(dotImage);
    }
    
    var sphereRad = 130;
    var fLen = 300;
    var maxParticle = 400;
    var turnSpeed = 0.005;
    var particles = [];
    
    var Particle = function(add) {
      var theta;
      if (add === true) {
        theta = Math.PI / 2;
      } else {
        theta = Math.random() * Math.PI;
      }
      this.distPos = {
        theta: theta,
        phi: 2 * Math.random() * Math.PI
      };
    
      this.distPos.x = sphereRad * Math.sin(this.distPos.theta) * Math.cos(this.distPos.phi);
      this.distPos.y = sphereRad * Math.sin(this.distPos.theta) * Math.sin(this.distPos.phi);
      this.distPos.z = sphereRad * Math.cos(this.distPos.theta);
      this.distVec = new Vector(this.distPos.x, this.distPos.y, this.distPos.z);
      this.unitVec = this.distVec.unit();
    
      var startMult = 1 + Math.random() * 2;
      this.startVec = this.distVec.multiply(startMult);
      this.x = this.startVec.x;
      this.y = this.startVec.y;
      this.z = this.startVec.z;
    
      this.veloRate = 1 + Math.random() * 1;
      this.velo = this.unitVec.negative().multiply(this.veloRate);
      this.finalVelo = 0;
      this.m = fLen / (fLen - this.z);
    
      this.age = this.life = 50 + Math.floor(Math.random() * 500);
      this.proj = {};
      this.turnAngle = 0;
      this.wanderTime = 200;
      this.radius = 1 + Math.random() * 3;
    
      var colorRandom = Math.floor(Math.random() * 4);
      if (colorRandom === 0) {
        this.img = dotImageList[0];
        this.color = "rgba(70,255,140,";
      } else if (colorRandom === 1) {
        this.img = dotImageList[1];
        this.color = "rgba(90,90,90,";
      } else if (colorRandom === 2) {
        this.img = dotImageList[2];
      } else if (colorRandom === 3) {
        this.img = dotImageList[3];
      }
    };
    
    Particle.prototype.update = function() {
      this.nowPos = new Vector(this.x, this.y, this.z);
      this.nowPosUnit = this.nowPos.unit();
    
      if (this.wanderTime > 0 && this.nowPos.length() > (sphereRad * 1.2)) {
        this.wanderTime--;
        this.velo.x += 0.1 * (Math.random() * 2 - 1);
        this.velo.y += 0.1 * (Math.random() * 2 - 1);
        this.velo.z += 0.1 * (Math.random() * 2 - 1);
        this.x = this.x + this.velo.x;
        this.y = this.y + this.velo.y;
        this.z = this.z + this.velo.z;
        this.op = util.map(this.nowPos.length(), sphereRad, this.startVec.length(), 1, 0);
    
      } else if (this.nowPos.length() > sphereRad) {
        if (this.finalPos === 0) {
          this.finalPos = this.nowPosUnit.multiply(sphereRad);
        }
        if (this.finalVelo === 0) {
          this.finalVelo = this.nowPosUnit.negative().multiply(this.veloRate);
        }
        this.x = this.x + this.finalVelo.x;
        this.y = this.y + this.finalVelo.y;
        this.z = this.z + this.finalVelo.z;
        this.op = util.map(this.nowPos.length(), sphereRad, this.startVec.length(), 1, 0);
      } else {
        this.op = this.life / (this.age / 2);
        this.turnAngle = (this.turnAngle + turnSpeed) % (Math.PI * 2);
        var cosAngle = Math.cos(turnSpeed);
        var sinAngle = Math.sin(turnSpeed);
        this.x = cosAngle * this.nowPos.x + sinAngle * this.nowPos.z;
        this.z = -sinAngle * this.nowPos.x + cosAngle * this.nowPos.z;
        this.y = this.nowPos.y;
        this.life--;
      }
    
      this.m = fLen / (fLen - this.z);
    };
    
    function loop() {
      context.clearRect(0, 0, width, height);
      if (particles.length < maxParticle) {
        var p = new Particle();
        particles.push(p);
      }
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        if (p.life === 0) {
          particles.splice(i, 1);
          var p = new Particle();
          particles.push(p);
        }
    
        p.update();
    
        if (p.m > 0) {
          context.save();
          context.globalAlpha = p.op;
          context.drawImage(p.img, p.x * p.m + CenterX, CenterY - p.y * p.m, p.radius * p.m * 2, p.radius * p.m * 2);
          context.restore();
        }
      }
      requestAnimationFrame(loop);
    }
    loop();
  }

  render(){
    return(
      <div className="HomeParticle">
        <canvas ref = { this.ParticleRef }/>
      </div>
    )
  }
}

export default Particle