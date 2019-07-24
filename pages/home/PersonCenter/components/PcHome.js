import React from 'react';
import TechnologyStack from './technologyStack'
import Count from './count';
import Radar from './radar';
import '../less/PcHome.less';

class PcHome extends React.Component{
  render(){
    return(
      <div className="PcHome">
        <Count />
        <TechnologyStack />
        <Radar />
      </div>
    )
  }
}

export default PcHome