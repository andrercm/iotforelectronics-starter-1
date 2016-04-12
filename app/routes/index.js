var express = require('express');
var router = express.Router();
var appEnv = require("cfenv").getAppEnv();

/* GET home page. */
router.get('/', function(req, res) {

	var VCAP_SERVICES = {};
	if(process.env.VCAP_SERVICES)
		VCAP_SERVICES = JSON.parse(process.env.VCAP_SERVICES);

	var iotf_url = VCAP_SERVICES['iotf-service'][0]['credentials'].http_host;
	var platformDashboard = 'https://' + iotf_url + '/dashboard';

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