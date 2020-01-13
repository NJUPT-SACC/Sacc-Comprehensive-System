import React from 'react';

import {ManagemenWorkimportUI} from '../../containers/Work'

/**
 * @author wwqin
 * @description 添加练习部分
 */
export default class ManagemenWorkimport extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current:0,
            error:'',
            fromTable:{
                Name:'',
                List:['0-0-0'],
                Place:'',
                Time:'',
                Content:''
            }
        }
    }

    changeName = value =>{
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Name:value
            }
        })
    };

    changeContent = value => {
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Content:value
            }
        })
    };

    changePlace = value => {
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Place:value
            }
        })
    }

    onCheck = () =>{
        if(this.state.fromTable.Name=='')
        {
            this.setState({ current:0,error:'error' });
            return;
        }
        else
            this.setState({ current:1,error:'' });
        if(this.state.fromTable.type=='')
        {
            console.log(this.state.fromTable.type)
            this.setState({ current:1,error:'error' });
            return;
        }
        else
            this.setState({ current:2,error:'' });
        if(this.state.fromTable.isCheckbos=='')
        {
            this.setState({ current:2,error:'error' });
            return;
        }
        else
            this.setState({ current:3,error:'' });
        if(this.state.fromTable.Content=='')
        {
            this.setState({ current:3,error:'error' });
            return;
        }
        else
            this.setState({ current:4,error:'' });
        let Aflag=false,Sflag=true;
        this.state.fromTable.answers.map((item) => {if(item) Aflag=true});
        this.state.fromTable.Selects.map((item) => {if(!item) Sflag=false});
        if(!Aflag&&!Sflag)
        {
            this.setState({ current:4,error:'error' });
            return;
        }
        else
            this.setState({ current:5,error:'' });
        if(this.state.fromTable.Score=='')
        {
            this.setState({ current:5,error:'error' });
            return;
        }
        else
            this.setState({ current:6,error:'success' });
    };

    onChange = value => {
        this.setState({
             fromTable:{
                 ...this.state.fromTable,
                 List:value
             } 
            });
    };

    render(){
        return <ManagemenWorkimportUI
                current={this.state.current}
                error={this.state.error}
                fromTable={this.state.fromTable}
                onChange={this.onChange}
                onCheck={this.onCheck}
                changePlace={this.changePlace}
                changeContent={this.changeContent}
                changeName={this.changeName}
                />
    }
}