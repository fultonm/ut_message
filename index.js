var EventEmitter = require('events').EventEmitter
var inherits = require('inherits')

module.exports = function (message) {
  inherits(ut_message, EventEmitter)

  function ut_message (wire) {
    EventEmitter.call(this)
    this._wire = wire
  }

  // Name of the bittorrent-protocol extension
  ut_message.prototype.name = 'ut_message'

  // Receive the message here
  ut_message.prototype.onMessage = (message) => {
    console.log(message)
    this._message = message
    return message
  }

  // Send the message here
  ut_message.prototype.send = (message) => {
    this._wire.extended('ut_message', message)
  }

  return ut_message
}