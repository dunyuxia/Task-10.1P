const task = require("../Schema/task");

exports.create = function (info, callback)
{
	task.create(info, (error) =>
	{
		if (error)
			return callback(error.message)

		return callback(null)
	})
}

exports.get = function (callback)
{
	task.find({}, null, {sort: {created: 'desc'}}, (err, info) =>
	{
		if (err) return callback(err)
		return callback(null, info)
	})
}