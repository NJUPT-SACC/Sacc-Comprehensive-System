import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { actionCreators} from './store';

import Navigation from '../../pages/home/HomePage/components/Navigation'
import { CompetitionList } from './containers/List'
import { CompetitionRank } from './containers/Rank'


class Competition extends React.Component{
  render(){
    return (
      <div className="Competition">
        <Navigation></Navigation>

        <Row>
          <Col span={12} offset={2}>
            <Col span={3}>
              <div className="CompetitionList-Menu">
                <p>所有比赛</p>
                <p>我参加的</p>
              </div>
            </Col>
            <Col span={24}><CompetitionList></CompetitionList></Col>
          </Col>
          <Col span={7} offset={1}>
            <CompetitionRank></CompetitionRank>
          </Col>
        </Row>
        <style jsx>{`
        .Competition{
          position: relative;
        }
        .CompetitionList-Menu{
          position: absolute;
          top: 10vh;
          left: -1vw;
          color:#ffffff;
          z-index: 0
        }
        .CompetitionList-Menu p{
          width: 5vw;
          line-height: 1.5;
          transition:all .5s;
          background: #03a9f4;
          cursor: pointer;
          text-align: center
        }
        .CompetitionList-Menu p:hover{
          transform: translateX(-4vw)
        }
        `}</style>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{

}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps,mapDispatchToProps)(Competition);
