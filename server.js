const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  
  server.get('/home', (req, res) => {
    const actualPage = '/home/home'
    const queryParams = 'home'
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/personcenter', (req, res) => {
    let actualPage = '/home/PersonCenter/personCenter'
    let queryParams = 'personcenter'
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    if(!cookieObject[' authkey']){
      actualPage = '/home/home'
      queryParams = '请登录后再进行操作.'
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/assignment', (req, res) => {
    let actualPage = '/assignment/assignment'
    let queryParams = 'assignment'
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    if(!cookieObject[' authkey']){
      actualPage = '/home/home'
      queryParams = '请登录后再进行操作.'
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/assignment/coding', (req, res) => {
    let actualPage = `/assignment/pages/assignmentCoding/pages/codingHome`;
    let queryParams = 'assignmentCoding';
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    if(!cookieObject[' authkey']){
      actualPage = '/home/home'
      queryParams = '请登录后再进行操作.'
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/assignment/question', (req, res) => {
    let actualPage = `/assignment/pages/assignmentCoding/pages/codingDetail`;
    let queryParams = 'codingDetail';
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    if(!cookieObject[' authkey']){
      actualPage = '/home/home'
      queryParams = '请登录后再进行操作.'
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/competition', (req, res) => {
    let actualPage = '/competition/competition'
    let queryParams = 'competition'
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    if(!cookieObject[' authkey']){
      actualPage = '/home/home'
      queryParams = '请登录后再进行操作.'
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/competition/Arena', (req, res) => {
    let actualPage = '/competition/competitionArena/competitionArena'
    let queryParams = { competitionNum: req.query.competitionNum }
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    if(!cookieObject[' authkey']){
      actualPage = '/home/home'
      queryParams = '请登录后再进行操作.'
    }
    app.render(req, res, actualPage, queryParams)
  });

  server.get('/management', (req, res) => {
    let actualPage = '/management/management'
    let queryParams = 'management'
    let cookies = req.headers.cookie ? req.headers.cookie.split(';') : []
    let cookieObject = {}
    cookies.map((item) => {
      cookieObject[item.split('=')[0]] = item.split('=')[1]
    })
    if(!cookieObject[' authkey']){
      actualPage = '/home/home'
      queryParams = '请登录后再进行操作.'
    }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log([

        "                   _ooOoo_",
        "                  o8888888o",
        "                  88\" . \"88",
        "                  (| -_- |)",
        "                  O\\  =  /O",
        "               ____/`---'\\____",
        "             .'  \\\\|     |//  `.",
        "            /  \\\\|||  :  |||//  \\",
        "           /  _||||| -:- |||||-  \\",
        "           |   | \\\\\\  -  /// |   |",
        "           | \\_|  ''\\---/''  |   |",
        "           \\  .-\\__  `-`  ___/-. /",
        "         ___`. .'  /--.--\\  `. . __",
        "      .\"\" '<  `.___\\_<|>_/___.'  >'\"\".",
        "     | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |",
        "     \\  \\ `-.   \\_ __\\ /__ _/   .-` /  /",
        "======`-.____`-.___\\_____/___.-`____.-'======",
        "                   `=---='",
        "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^",
        "         佛祖保佑       永无BUG",
        "         Ready on http://localhost:3000"
    ].join('\n'));
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})