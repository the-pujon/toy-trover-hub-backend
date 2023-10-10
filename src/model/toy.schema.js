const mongoose = require("mongoose");

const toySchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  sellerName: {
    type: String,
    require: true,
  },
  sellerEmail: {
    type: String,
    require: true,
  },
  sellerImage: {},
  toyImage: {},
  category: {
    type: String,
    require: true,
  },
  subcategory: {
    type: String,
    require: true,
  },
  inStock: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Toys", toySchema);
