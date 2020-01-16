/*
 * @description 提交卷子
 * @param {Number} label 比赛标号
 * @param {Array} answers 比赛提交答案
 * @param {Number} answers.topicIndex 提交的题目序号
 * @param {String} answers.answers 提交的题目的答案 A / AB（单选 / 多选）
 */

let submitMock = {
  "label": 01,
  "answers": [
    {
      "topicIndex": 1,
      "answers": "A / AB"
    },
    {
      "topicIndex": 1,
      "answers": "A / AB"
    }
  ]
}