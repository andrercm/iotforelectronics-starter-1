var express = require('express');
var router = express.Router();
var appEnv = require("cfenv").getAppEnv();

/* GET home page. */
router.get('/', function(req, res) {

	var platformDashboard = 'https://new-console.ng.bluemix.net/apps/' + appEnv['app'].application_id + '?paneId=connected-objects';

	res.render('index', {
		platformDashboard: platformDashboard
	});
});

/* GET home page. */
router.get('/simulationClient', function(req, res) {
	var protocol = (appEnv.isLocal) ? 'ws://' : 'wss://';
	var address = (appEnv.isLocal) ? appEnv.bind +  ':' + appEnv.port : appEnv.url.split("://")[1]; 
	var wsurl =  protocol + address + '/serverStatus';
	res.render('simulationClient', { wsurl: wsurl });
});

module.exports = router;