import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  destination: { type: String, required: true },
  clues: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  funFact: { type: String, required: true },
});

export default mongoose.model("Question", questionSchema);
