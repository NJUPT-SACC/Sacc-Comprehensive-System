import React from 'react';
import { connect } from 'react-redux';
import { actionCreators,store} from '../../store';

const DataSet = require('@antv/data-set');
let ViserComponent;

if (typeof window !== 'undefined') {
  ViserComponent = require("viser-react");
}

class Radar extends React.Component {
  componentDidMount(){
    this.props.skill(this.props.authKey);
  }
  render() {
    const dv = new DataSet.View().source(this.props.skillList.slice(0,5));
    dv.transform({
      type: 'fold',
      fields: ['percentage'],
      key: 'user',
      value: 'score',
    });
    const data = dv.rows;
    
    const scale = [{
      dataKey: 'score',
      min: 0,
      max: 100,
    }];
    const axis1Opts = {
      dataKey: 'technologyName',
      line: null,
      tickLine: null,
      grid: {
        lineStyle: {
          lineDash: null
        },
        hideFirstLine: false,
      }
    };

    const axis2Opts = {
      dataKey: 'score',
      line: null,
      tickLine: null,
      grid: {
        type: 'polygon',
        lineStyle: {
          lineDash: null,
        },
      },
    };

    const coordOpts = {
      type: "polar",
      radius: "0.8",
    };

    return (
      <div className="radar">
        <div className="radarTitle">
          <p id="skill-tree">技能树</p>
        </div>
        <div className="radarContent" style={{paddingBottom: '400px', height: 0, overflow: 'hidden'}}>
          {
            typeof window !== 'undefined' ? 
              <ViserComponent.Chart forceFit height={400} data={data} padding={[50, 50, 50, 50]} scale={scale}>
                <ViserComponent.Tooltip />
                <ViserComponent.Axis {...axis1Opts} />
                <ViserComponent.Axis {...axis2Opts} />
                <ViserComponent.Coord {...coordOpts} />
                <ViserComponent.Line position="technologyName*score" color="user" size={2} />
                <ViserComponent.Point position="technologyName*score" color="user" size={4} shape="circle"/>
                <ViserComponent.Area position="technologyName*score" color="user"/>
              </ViserComponent.Chart>
            :''
          }
        </div>
      
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
	return {
    skillList: state.home.skillList,
    authKey: state.home.authKey
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
    skill(authKey){
      dispatch(actionCreators.Skill(authKey))
    }
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Radar);