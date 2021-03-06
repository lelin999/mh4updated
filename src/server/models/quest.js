// require mongoose:
var mongoose = require('mongoose');
// create a mongoose schema object:
var QuestSchema = new mongoose.Schema({
    name: { type: String },
    type: { type: Number },
    rank: { type: Number },
    best_speedrun: { type: mongoose.Schema.Types.ObjectId, ref: 'Speedrun' }
});
// set mongoose Quest model using Quest schema:
mongoose.model('Quest', QuestSchema);
