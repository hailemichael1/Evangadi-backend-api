const express = require("express");
const {
  askQuestion,
  getAllQuestions,
  getSingleQuestion,
  deleteQuestion,
  editQuestion,
} = require("../controller/questionController");
const router = express.Router();

// Post a new question
router.post("/", askQuestion);

// Get all questions
router.get("/", getAllQuestions);

// Get a single question by ID
router.get("/:questionid", getSingleQuestion);

// Delete a single question
router.delete("/:questionid", deleteQuestion);

// Edit a question
router.patch("/:questionid", editQuestion); 
module.exports = router;
