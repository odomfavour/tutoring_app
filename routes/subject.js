const router = require('express').Router();
const {
  createSubject,
  getSubjects,
  specificSubject,
  deleteSubject,
  updateSubject,
} = require("../controllers/subject");


// create a subject
// router.post("/:id", createSubject);

// get all subjects under a category
router.get("/subjects", getSubjects);

// get a specific subject
router.get("/subject/:subjectId", specificSubject);

// delete a subject
router.delete("/subject/:subjectId", deleteSubject);

// update a specific post
router.patch("/subject/:subjectId", updateSubject);


