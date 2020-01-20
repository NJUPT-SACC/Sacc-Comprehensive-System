/*
 * @description 个人比赛记录
 * @param {Array} 
 * @param {String} name 比赛名称
 * @param {String} time 比赛时间
 * @param {String} status 比赛状态： 已报名/进行中/已提交/已结束
 * @param {Number} label 比赛标号
 * @param {String} grade 比赛成绩
 * @param {Array} ranking 本次比赛排名榜（包含编程题 + 选择题）
 * @param {String} ranking.name 本次比赛排行榜人名字
 * @param {Number} ranking.accuracy 本次比赛排行榜人的答对题数
 * @param {Number} ranking.grade 本次比赛排行榜人的成绩
*/

[{
  "name": "网页设计大赛",
  "time": "2019-11-07",
  "status": "已报名",
  "label": 1,
  "grade": 2,
  "ranking":[
    {
      "name": "张三",
      "accuracy": 25,
      "grade": 1
    },
    {
      "name": "李四",
      "accuracy": 24,
      "grade": 2
    }
  ]
}, {
  "name": "网页设计大赛",
  "time": "2019-11-07",
  "grade": "第一名 / 97分",
  "status": "已结束",
  "label": 2,
  "ranking":[
    {
      "name": "张三",
      "accuracy": 25,
      "grade": 1
    },
    {
      "name": "李四",
      "accuracy": 24,
      "grade": 2
    }
  ]
}]