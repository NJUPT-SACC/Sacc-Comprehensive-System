/*
 * @description 获取比赛内容
 * @param {Object} eg: 01 为比赛标号 
 * @param {Number} label 比赛标号
 * @param {String} duration 比赛时长
 * @param {String} problemsNumber 比赛题目数量
 * @param {Array} problem 比赛具体题目
 * @param {String} problem.topic 具体题目的名称
 * @param {String} problem.description 题目表述
 * @param {String} problem.type 题目类型： 单选 / 多选 / 编程
 * @param {String} problem.options.option 选择题选项index： A / B / C / D
 * @param {String} problem.options.description 选择题选项表述
*/

let getProblemMock = {
  "01":{
    "duration": "01小时30分",
    "problemsNumber": 25,
    "problem":[
      {
        "topic": "神奇的单片机",
        "description": "题目表述",
        "type": "radio",
        "options":[
          {
            "option":"A",
            "description":"AAAAAAAAAA"
          },
          {
            "option":"B",
            "description":"BBBBBBBBBB"
          },
          {
            "option":"C",
            "description":"CCCCCCCCCC"
          }
        ]
      }
    ]
  },
  
  "02":{
    "duration": "01小时30分",
    "problemsNumber": 25,
    "problem":[
      {
        "topic": "神奇的单片机",
        "description": "题目表述",
        "type": "radio",
        "options":[
          {
            "option":"A",
            "description":"AAAAAAAAAA"
          },
          {
            "option":"B",
            "description":"BBBBBBBBBB"
          },
          {
            "option":"C",
            "description":"CCCCCCCCCC"
          }
        ]
      }
    ]
  }
}