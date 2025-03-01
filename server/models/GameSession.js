import mongoose from "mongoose";

const GameSessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destination",
    required: true,
  },
  selectedAnswer: { type: String, required: true },
  isCorrect: { type: Boolean, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("GameSession", GameSessionSchema);
