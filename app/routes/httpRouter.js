var express = require('express');
var httpRouter = express.Router();


httpRouter.put('/washingMachine/:deviceID/startWashing', function(req, res) {
	if(httpRouter.onPutStartWashing)
		return res.json(httpRouter.onPutStartWashing(req.params.deviceID));
	var payload = JSON.stringify(req.body);
	if (iotAppMonitor){
		iotAppMonitor.sendToClient('http', "/startwashing, payload:" + payload);
	}
	return res.send({message: 'Serviced by /startwashing', payload: payload});
});

//Callback onPutStartWashing: override & respond with - function(deviceID)
httpRouter.prototype.onPutStartWashing = null;


httpRouter.put('/washingMachine/:deviceID/stopWashing', function(req, res) {
	if(httpRouter.onPutStopWashing)
		return res.json(httpRouter.onPutStopWashing(req.params.deviceID));
	var payload = JSON.stringify(req.body);
	if (iotAppMonitor){
		iotAppMonitor.sendToClient('http', "/stopwashing, payload:" + payload);
	}
	return res.send({message: 'Serviced by /stopwashing', payload: payload});
});

//Callback onPutStopWashing: override & respond with - function(deviceID)
httpRouter.prototype.onPutStopWashing = null;



module.exports = httpRouter;
