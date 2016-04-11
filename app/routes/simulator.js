var express = require('express');
var simulatorRouter = express.Router();

simulatorRouter.get('/startSimulator', function(req, res) {
	simulationClient.startSimulation();
	res.json("Simulation client is starting.");
});

simulatorRouter.get('/stopSimulator', function(req, res) {
	simulationClient.terminateSimulation();
	res.json("Simulation client is shutting down.");
});

simulatorRouter.get('/restartSimulator', function(req, res) {
	simulationClient.restartSimulation();
	res.json("Simulation client is restarting.");
});

module.exports = simulatorRouter;