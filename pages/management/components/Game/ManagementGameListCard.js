import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Badge, Icon } from 'antd';
import { actionCreators, store} from '../../store';
import '../less/ManagementGameListCard.less'

class ManagementGameList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const didcolor = {background: 'linear-gradient(#F2F2EF,#EDE9E4)'};
        const willcolor = {background: 'linear-gradient(#fffc43, #ffd479)'};
        const doingcolor = {background: 'linear-gradient(#6DC048,#BDD1B3)'};
        return (
            <div className='ManagementGameListCard-Content' style={this.props.did=='已结束'?didcolor:this.props.did=='正在进行'?doingcolor:willcolor}>
                <div className='ManagementGameListCard-title'><span>计算机基础知识大赛</span></div>
                <div className='ManagementGameListCard-container'>
                    <Row>
                        <Col><div>开始时间: <span>2018-04-24 18:00:00</span></div></Col>
                    </Row>
                    <Row>
                        <Col><div>开始时间: <span>2018-04-24 18:00:00</span></div></Col>
                    </Row>
                    <Row>
                        <Col><div>比赛状态: <span><Badge color="gray" text="已结束" /></span></div></Col>
                    </Row>
                    <Row>
                        <Col><div>比赛地点: <span>计算机学科楼101</span></div></Col>
                    </Row>
                    <div className='ManagementGameListCard-icon'>
                        <span className='ManagementGameListCard-iconitem'><Icon type="home" theme="filled" onClick={this.props.changeShow}/></span>
                        <span className='ManagementGameListCard-iconitem'><Icon type="edit" theme="filled" onClick={this.props.showDrawer}/></span>
                        <span className='ManagementGameListCard-iconitem'><Icon type="setting" theme="filled" /></span>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
	return {
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
        changeShow(gameId){
			dispatch(actionCreators.changeShow('比赛详情',gameId))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagementGameList);