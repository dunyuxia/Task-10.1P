const account = require('./Model/account');
const task = require('./Model/task');

module.exports = function (app)
{
	app.put('/account', function (req, res)
	{
		account.create(req.body, function (err)
		{
			if (err)
			{
				res.status(200).json({"success": false, "msg": err})
				return
			}

			res.status(200).json({"success": true, "msg": err})
		})
	})

	app.put('/task', function (req, res)
	{
		task.create(req.body, function (err)
		{
			if (err)
			{
				res.status(200).json({"success": false, "msg": err})
				return
			}

			res.status(200).json({"success": true, "msg": err})
		})
	})
}