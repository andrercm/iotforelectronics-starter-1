var express = require('express');
var router = express.Router();
var appEnv = require("cfenv").getAppEnv();

/* GET home page. */
router.get('/', function(req, res) {

	var platformDashboard = 'https://new-console.ng.bluemix.net/apps/' + appEnv['app'].application_id + '?paneId=connected-objects';
	var mobileDownload = req.__('main_page.download_app_p2.text');
	var mobileDownloadLink = req.__('main_page.download_app_p2.link_on');
	var mobileInstructions = req.__('main_page.instructions.text');
	var mobileInstructionsLink = req.__('main_page.instructions.link_on');

	mobileDownload = mobileDownload.replace(mobileDownloadLink, '<a href="https://itunes.apple.com/us/app/ibm-iot-for-electronics/id1103404928" target="_blank">' + mobileDownloadLink + '</a>');
	mobileInstructions = mobileInstructions.replace(mobileInstructionsLink, '<a href="https://new-console.ng.bluemix.net/docs/starters/IotElectronics/iotelectronics_overview.html#iotforelectronics_getmobileapp" target="_blank">' + mobileInstructionsLink + '</a>');

	res.render('index', {
		platformDashboard: platformDashboard,
		mobileDownload: mobileDownload,
		mobileInstructions: mobileInstructions
	});
});

module.exports = router;