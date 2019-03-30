const mongoose        = require("mongoose");
const Schema          = mongoose.Schema;

const ArticleSchema = new Schema({
  name: String,
  price: String,
  categories: [String],
});

module.exports  = mongoose.model("Article", ArticleSchema);