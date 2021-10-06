const account = require("../Schema/account");

exports.create = function (info, callback)
{
	account.create(info, (error) =>
	{
		if (error)
			return callback(error.message)

		return callback(null)
	})

}