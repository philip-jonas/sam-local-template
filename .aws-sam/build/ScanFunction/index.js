/**
 * this is also just a fake repsonse etc...
 */
function request(url, callback) {
	console.log(`Posting to url ${url}`)
	return callback('Success!')
}

/**
 * do not use this function it sudo code for example only,
 * this would be replaced by an actual post request.
 */
function post(body) {
	if (body)
		request(body.url, (res, err) => {
			if (err) return err
			return console.log(res)
		})
}

exports.handler = (payload) => {
	/**
	 * this is the initial event handler,
	 * and could look something like this.
	 */

	if (payload)
		return post(payload)
}
