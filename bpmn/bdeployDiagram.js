const ZB = require('zeebe-node')

void (async () => {
	const zbc = new ZB.ZBClient() // localhost:26500 || ZEEBE_GATEWAY_ADDRESS

	const res = await zbc.deployWorkflow('./check-email-test.bpmn')
	console.log(res)
})()