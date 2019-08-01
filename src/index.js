function post(data) {
	if (data)
		request(url, (res, err) => {
			if (err) return err
			return res
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
