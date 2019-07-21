import React from 'react';
import { connect } from 'react-redux';

import ManagementGameListCard from "./ManagementGameListCard";

class ManagementGameList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div style={{display:'flex',flex:'auto',flexWrap:'wrap'}}>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
                <ManagementGameListCard/>
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

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ManagementGameList);