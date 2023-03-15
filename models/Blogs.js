// const { timeStamp } = require('console');
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { timestamps: true });
mongoose.models = {}
export default mongoose.model("Blog", blogSchema);