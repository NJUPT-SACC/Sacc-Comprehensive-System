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
一般情况下，提交 GIT 时的注释可以分成几类，可以用几个动词开始：
- Added ( 新加入的需求 )
- Fixed ( 修复 bug )
- Changed ( 修改的任务 )
- Updated ( 更新的任务，或者由于第三方模块变化而做的变化 )
尽量将注释缩减为一句话，不要包含详细的内容。
## 使用依赖
本次开发采用的是React+Redux+Router，有不同的是加入了Nextjs来完成服务端渲染，Nextjs和React有啥不同我就不赘述了。
### [Redux](http://cn.redux.js.org/docs/react-redux/)
### [Next+Less](https://github.com/zeit/next-plugins/tree/master/packages/next-less)
### [Next](https://nextjs.frontendx.cn/docs/#%E5%AE%89%E8%A3%85)
### [styled-jsx](https://github.com/zeit/styled-jsx)
## 开发
<table>
<tr>
<th rowspan="2">开发人员</th>
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

## 重构demo
```
//调用redux里的数据
//原本是这么写的：name: state.getIn(["competition", "name"])
const mapStateToProps = (state) =>{
	return {
		name: state.competition.competitionName
	}
}
```
```
//redux里更改数据
//state.set("competitionName", action.name)
//fromJS也去掉了
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
接下来是比较重要的部分，因为无法持续化的问题我引入了redux-persist，关于数据需要将有必要进行持续化的数据加入白名单（whitelist）中才能将需要持续化的数据持续化
```
const competitionpersistConfig = {
    key: 'competition',
    storage,
    whitelist: ['competitionName'] // place to select which state you want to persist
} 
const reducer = combineReducers({
    competition: persistReducer(competitionpersistConfig, competitionReducer),
});
```
