# SACC Comprehensive System
NSCS is a system that combines competition, homework exercises, and offline lecture notifications. Written in HTMl, CSS, JavaScript, and other functional languages, it supports online refereeing and single-choice multiple choice questions

![License](https://img.shields.io/github/license/NJUPT-SACC/Sacc-Comprehensive-System.svg?style=flat-square)
[![FOSSA Status](https://img.shields.io/badge/license%20scan-passing-green.svg?style=flat-square)](https://app.fossa.io/projects/git%2Bgithub.com%2FZsgsDesign%2FCodeMaster?ref=badge_shield)
![GitHub repo size](https://img.shields.io/github/repo-size/NJUPT-SACC/Sacc-Comprehensive-System.svg?style=flat-square)
![Stars](https://img.shields.io/github/stars/NJUPT-SACC/Sacc-Comprehensive-System.svg?style=flat-square)
![Forks](https://img.shields.io/github/forks/NJUPT-SACC/Sacc-Comprehensive-System.svg?style=flat-square)
## NSCS Development Team
| [<b>Qin</b>](https://github.com/wwqin)<br />**Leader**   |  [<b>ZOULAIZOUQU</b>](https://github.com/big747386)<br />**Leader** | [<b>Tiki-Taka</b>](https://github.com/BinghuiXie)<br />**FrontEnd**<br />  | [<b>HKFPouu</b>](https://github.com/HKFPouu)<br />**FrontEnd** | [<b>goufaan</b>](https://github.com/goufaan)<br />**BackEnd** | [<b>ZCCy</b>](https://github.com/ZCCy)<br />**FrontEnd**   |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
## start
### dev
```
yarn dev
```
### build
```
yarn build
```
### start
```
yarn start
```
## commit standard (？？):smile:
In general, comment for git submission can be divided into serval groups, started with a few verbs:
- Added ( add new demand into the project )
- Fixed ( fix bug )
- Changed ( mission that has been changed )
- Updated ( missison has been updated, or due to third-party module change )
## dependencies
React + Redux + Router，and we use Next.js to finsih Server Side Rendering 
### [Redux](http://cn.redux.js.org/docs/react-redux/)
### [Next+Less](https://github.com/zeit/next-plugins/tree/master/packages/next-less)
### [Next](https://nextjs.frontendx.cn/docs/#%E5%AE%89%E8%A3%85)
### [styled-jsx](https://github.com/zeit/styled-jsx)
## development
<table>
<tr>
<th rowspan="2">members</th>
<th>Home</th>
<th>Management</th>
<th>Assignment</th>
<th>Comprtition</th>
</tr>
<tr>
<td>HKFPouu</td>
<td>wwqin</td>
<td>binghuixie</td>
<td>wwqin</td>
</tr>
</table>

## refactor example
```
// use state in stored in redux 
// code in the past：name: state.getIn(["competition", "name"])
// now:
const mapStateToProps = (state) =>{
	return {
		name: state.competition.competitionName
	}
}
```
```
// reducer.js
// change redux state when its immutable
//state.set("competitionName", action.name)
// remove fromJS
const defaultState = {
  competitionName:''
};

export default (state = defaultState, action) => {
  switch(action.type){
    case constants.COMPETITION_CHANGE_NAME:
      return {...state,'competitionName':action.name}
    default:
      return state;
  }
}
```
Here's come the important part, we use redux-persist (redux state can't persist when navigate using next/router) 
you need to put those data needed to persist into whitelist, so that it can persist
```
// configuration in root reducer.js
const competitionpersistConfig = {
    key: 'competition',
    storage,
    whitelist: ['competitionName'] // place to select which state you want to persist
} 
const reducer = combineReducers({
    competition: persistReducer(competitionpersistConfig, competitionReducer),
});
```
