'use strict'

var app = require('./src')
var dotenv = require('dotenv')
var pkg = require('./package')

dotenv.config({ silent: true })

var options = {
  port: process.env.PORT || pkg.config.port,
  quiet: process.env.MOCKBIN_QUIET || pkg.config.quiet,
  redis: process.env.MOCKBIN_REDIS || pkg.config.redis
}

app(options, function () {
  console.info('process.env.port is %d', process.env.PORT)
  console.info('pkg.config.port is %d', pkg.config.port)
  console.info('starting server on port: %d', options.port)
})
