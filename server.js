// ===================================================
// IMPORTANT: only for production
// total.js - web application framework for node.js
// http://www.totaljs.com
// ===================================================

var fs = require('fs');
var options = {};
options.ip = '0.0.0.0';
options.port = parseInt(process.argv[2]);
options.config = { name: 'IEDCenter' };
// options.https = { key: fs.readFileSync('keys/agent2-key.pem'), cert: fs.readFileSync('keys/agent2-cert.pem')};
// options.sleep = 2000;

require('total.js').http('release', options);
// require('total.js').https('release', options);
