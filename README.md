# 计软网安院科协综合系统
## 启动方式
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
## 提交commit规范(？？):smile:
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
