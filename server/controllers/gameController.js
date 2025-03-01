import Question from "../models/Question.js";
import Score from "../models/Score.js";

export const getClue = async (req, res) => {
  try {
    const count = await Question.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const question = await Question.findOne().skip(randomIndex);

    if (!question)
      return res.status(404).json({ message: "No questions found." });

    res.json({
      clue: question.clues[Math.floor(Math.random() * question.clues.length)],
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const checkAnswer = async (req, res) => {
  const { userId, answer } = req.body;

  try {
    const question = await Question.findOne({ correctAnswer: answer });

    if (!question) {
      await Score.findOneAndUpdate(
        { userId },
        { $inc: { incorrectAnswers: 1 } },
        { upsert: true }
      );
      return res.json({
        correct: false,
        message: "Incorrect!",
        funFact: "Try again!",
      });
    }

    await Score.findOneAndUpdate(
      { userId },
      { $inc: { correctAnswers: 1 } },
      { upsert: true }
    );

    res.json({ correct: true, message: "Correct!", funFact: question.funFact });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getUserScore = async (req, res) => {
  try {
    const score = await Score.findOne({ userId: req.params.userId });

    if (!score) return res.json({ correctAnswers: 0, incorrectAnswers: 0 });

    res.json(score);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Score.find()
      .sort({ correctAnswers: -1 })
      .limit(10)
      .populate("userId", "username");
    res.json(leaderboard);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
