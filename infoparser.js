'use strict';

exports.headerParser = function(req, res) {
	var ipAddress = req.connection.remoteAddress;
	var system = req.headers['user-agent'].split(/\(([^)]+)\)/)[1];
	var lang = req.headers['accept-language'].split(",")[0];

	return {
		IPAddress: ipAddress,
		Language: lang,
		System: system
	}
}

