var java = require('java');
var path = require('path');

java.options.push('-Xrs');

java.classpath.push(path.join(__dirname, 'node-java', 'src'));

var Log = java.import('main.java.com.nodetest.Log');
var logger = java.newProxy('main.java.com.nodetest.Logger', {
  emit: function (message) {
    console.log(message);
  },
  ping: function () {
    console.log('pinged at ' + new Date())
  }
});
loggerRefInterval = setInterval(function () {
  process.nextTick(function () {
    logger.ref();  
  }); 
}, 500);
Log.setLoggerSync(logger);

var TestInitiator = java.import('main.java.com.nodetest.TestInitiator');

var initiator = new TestInitiator();

initiator.Start();