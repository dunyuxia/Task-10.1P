const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://SIT313:SIT313@cluster0.lncoo.mongodb.net/iServiceDB?retryWrites=true&w=majority');
module.exports = mongoose;