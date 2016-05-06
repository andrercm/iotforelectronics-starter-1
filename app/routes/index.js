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

module.exports = router;