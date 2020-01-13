import React from 'react';

import {ManagementListRadioUI} from "../../containers/List"

/**
 * @author wwqin
 * @description 添加题目
 */
export default class ManagementListRadio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current:0,
            error:'',
            fromTable:{
                Name:'',
                type:'',
                Content:'',
                Selects:['','','',''],
                isCheckbos:false,
                answers:[false,false,false,false],
                Score:[0,'容易']
            }
        }
    }

    changeCheck = () => {
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                isCheckbos:!this.state.fromTable.isCheckbos
            }
        })
    }

    addItem = () => {
        let select = this.state.fromTable.Selects;
        select.push('');
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Selects:select
            }
        })
    }

    deleteItem = () => {
        let select = this.state.fromTable.Selects;
        select.splice(select.length - 1,1);
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Selects:select
            }
        })
    }

    changeItem = (index,e) => {
        let select = this.state.fromTable.Selects;
        select[index] = e.target.value;
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Selects:select
            }
        })
    }

    changeAnswer = (index,e) => {
        let answer = this.state.fromTable.answers;
        answer[index] = e.target.checked;
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                answers:answer
            }
        })
        
    }

    changeName = e => {
      console.log(e.target)
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Name:e.target.value
            }
        })
    }

    changeType = e => {
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                type:e
            }
        })
    }

    changeContent = e => {
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Content:e.target.value
            }
        })
    }

    changeScore = value => {
        console.log(value)
        let score;
        switch(value){
            case value>=1&&value<2:return score='入门';
            case value>=2&&value<4:return score='了解';
            case value>=4&&value<6:return score='掌握';
            case value>=6&&value<8:return score='熟练';
            case value>=8&&value<=10:return score='精通';
        }
        this.setState({
            fromTable:{
                ...this.state.fromTable,
                Score:[value,score]
            }
        })
    }

    onCheck = () => {
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
    }

    render(){
        return <ManagementListRadioUI
                current={this.state.current}
                error={this.state.error}
                fromTable={this.state.fromTable}
                onCheck={this.onCheck}
                changeScore={this.changeScore}
                changeContent={this.changeContent}
                changeType={this.changeType}
                changeName={this.changeName}
                changeAnswer={this.changeAnswer}
                addItem={this.addItem}
                changeItem={this.changeItem}
                deleteItem={this.deleteItem}
                changeCheck={this.changeCheck}
                />
    }
}