'use strict'

const {api, config} = require('./api')

console.log("ENV", process.env)

api.listen(config.port, (err) => {
	const {logger} = api.locals
	if (err) {
		logger.error(err)
		process.exit(1)
	}
	logger.info(`Listening on ${config.hostname}:${config.port}.`)
})
