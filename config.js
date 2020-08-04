
'use strict'
 
const path = require('path')
 
module.exports = {
  port: '10100',
  secret: 'secret',
  publicDir: path.resolve(__dirname, './src'),
  logPath: path.resolve(__dirname, './logs/koa-template.log'),
  mongoDB: {
    database: 'mall',
    username: 'root',
    password: 'root',
    host: '127.0.0.1',
    port: 27017
  }
}