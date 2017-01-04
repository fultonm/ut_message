/* jshint camelcase: false */

var Protocol = require('bittorrent-protocol')
var ut_message = require('../')
var test = require('tape')

test('wire.use(ut_message())', function (t) {
  var wire = new Protocol()
  wire.pipe(wire)

  wire.use(ut_message())

  t.ok(wire.ut_message)
  t.ok(wire.ut_message.onMessage)
  t.ok(wire.ut_message.send)
  t.notOk(wire.ut_message.something)
  t.end()
})

// TODO: more thorough unit tests