var util = require("util");
var GVSP = require("./GVSP").GVSP;
var constants = require("../Constants");

var DATA_PAYLOAD = function(buffer) {
  var me= this;
  GSVP.call(this,buffer);
  throw new Error('OK we have dot to some work');
  me.data = me.buffer.slice(11,OH_FIND_ME);

}
util.inherits(DATA_PAYLOAD, GVSP);



exports.DATA_PAYLOAD = DATA_PAYLOAD;