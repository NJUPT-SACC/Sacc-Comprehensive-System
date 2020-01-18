# 开发规范
### 开发提交规范
现在主要有三个分支master、dev、refactor，开发的时候
1. 从dev分支clone到本地
2. 然后自己开设自己的分支，命名规则：名字缩写-需求类型，eg：wwq-refactor
3. 开发完成后向dev/refactor分支提交合并请求
4. 由指定人员进行review后合并，如果是未来还要进行的需求则保留分支，否则删除分支
### 命名规范
1. 统一采用驼峰式命名。eg：startTime
2. 组件名第一个字母必须大写
3. 组件内命名必须是**组件名-类名**.eg:Management-myContainer
4. 常量, 使用全部字母大写，单词间下划线分隔的命名方式。
5. 私有属性、变量和方法以下划线 _ 开头。
### 注释规范
必须的注释尽量详细，不必要的注释大可不必。
每个函数或者组件前必须注释该组件或者函数的入参和用途
```
/**
 * @author wwqin
 * @description 比赛列表UI部分
 * @param {Function} props.showDrawer 在侧边打开比赛信息
 * @param {Function} props.onClose 关闭在侧边打开的比赛信息
 * @param {Boolean} props.visible 侧边信息显示状态
 * @param {Num} props.id 比赛ID
 * @param {String} props.name 比赛名称
 * @param {Date} props.startTime 比赛开始时间
 * @param {Date} props.endTime 比赛结束时间
 * @param {String} props.site 比赛地点
 * @param {String} props.did 比赛进行状况
 * @param {Array} props.attention 注意事项
 * @param {Array} props.list 题目列表
 */
export const ManagementGameListUI = (props) => {
  const { Search } = Input;
  const isDid = Date.now()>new Date("2019-9-21 14:50:00")?'已结束':Date.now()>new Date("2019-8-21 14:50:00")?'正在进行':'未开始'
  return (
    <div style={{display:'flex',flex:'auto',flexWrap:'wrap'}}>
      <Search placeholder="请输入搜索内容" onSearch={value => console.log(value)} enterButton/>
      <Divider />
      <ManagementGameListCard showDrawer={props.showDrawer} gameId='23' did='已结束'/>
      <Drawer
      width={640}
      placement="right"
      closable={false}
      onClose={props.onClose}
      visible={props.visible}
      >
      <Descriptions title="比赛信息" bordered>
        <Descriptions.Item label="比赛ID" span={3}>2019072301</Descriptions.Item>
        <Descriptions.Item label="比赛名称" span={3}>计算机基础知识大赛</Descriptions.Item>
        <Descriptions.Item label="开始时间" span={3}>2018-04-24 18:00:00</Descriptions.Item>
        <Descriptions.Item label="结束时间" span={3}>2019-04-24 18:00:00</Descriptions.Item>
        <Descriptions.Item label="地点" span={3}>计算机学科楼</Descriptions.Item>
        <Descriptions.Item label="举行状况" span={3}>正在进行</Descriptions.Item>
        <Descriptions.Item label="注意事项" span={3}>
        </Descriptions.Item>
        <Descriptions.Item label="题目列表" span={3}>
          <div>
          </div>
        </Descriptions.Item>
      </Descriptions>
      <a>查看更多</a>
      </Drawer>
    </div>
  )
}
```
### 组件规范
通过作用区分成两类组件UI组件和容器组件，UI组件专注负责UI部分放到**containers**目录下，容器组件专注业务逻辑和数据交互存放在**components**目录下。
在容器组件中通过是否使用redux数据区分为两类，一类是通过**connect**链接**store**的，另一类是无需使用redux只使用自身state的。
区分以上几种组件方便以后性能优化！
### commit规范
In general, comment for git submission can be divided into serval groups, started with a few verbs:
- add ( add new demand into the project )
- fixed ( fix bug )
- change ( mission that has been changed )
- updat ( missison has been updated, or due to third-party module change )
- refactor
- doc
### 其他
**代码全部两个缩进**，出现问题或者自己无法解决的bug及时在工作群沟通或者提起issue。
