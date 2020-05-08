const router = require('express').Router();
const {
  createSubject,
  getSubjects,
  specificSubject,
  deleteSubject,
  updateSubject,

} = require("../controllers/subject");


const verify = require('../routes/verifyToken')



// create a subject
router.post("/:categoryId", verify, createSubject);

// get all subjects under a category
router.get("/", verify, getSubjects);

// get a specific subject
router.get("/:subjectId", verify, specificSubject);

// delete a subject
router.delete("/:subjectId", verify, deleteSubject);

// update a specific post
router.patch("/:subjectId", verify, updateSubject);

// register for a lessson

// router.post('/register', tutor_register);

// router.post('/lesson', createLesson)
module.exports = router;