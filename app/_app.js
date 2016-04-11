httpRouter.onPutStartWashing  = function(deviceID) {
	washingMachineIoTFClient.sendstartWashingMessage(deviceID);
	return "Start";
};

httpRouter.onPutStopWashing  = function(deviceID) {
	washingMachineIoTFClient.sendstopWashingMessage(deviceID);
	return "Stop";
};



//Example for using simulation Client 
var SimulationClient = require('./devicesSimulation/simulationClient.js');
//create new simulation client using devices in configuration file
global.simulationClient = new SimulationClient({simulationConfigFile: "./simulationConfig.json"});

simulationClient.restartSimulation();
////start simulation session
//simulationClient.restartSimulation().then(function(){
//	console.log("simulationStarted");
//	
//	//set attribute value
//	simulationClient.setAttributeValue("5FEB4084C913", "program", "Stains");
//	
//	//get device status
//	simulationClient.getDeviceStatus("5FEB4084C913").then(function(status){
//		console.log("Got Device Status for device :5FEB4084C913");
//		console.log(status);
//	});
//});

//listen on simulation events samples - for more events search "emit" in /devicesSimulation/simulationClient.js

////listen on error event
//simulationClient.on("error", function (err){
//	console.error(err);
//});

//listen on attribute change event
//simulationClient.on("attributeValueChange", function(deviceID, attrNames2Values){
//	console.log("Attributes Changed for Device " + deviceID);
//	console.log(attrNames2Values);
//});


