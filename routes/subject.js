const router = require('express').Router();
const {
  createSubject,
  getSubjects,
  specificSubject,
  deleteSubject,
  updateSubject,
  registerForSubject,
  getMySubjects
} = require("../controllers/subject");


const { authUser, authRole, ROLE } = require('./verifyToken')



// admin can create a subject
router.post("/:categoryId", authUser, authRole(ROLE.ADMIN), createSubject);

// admin can get all subjects under a category
router.get("/", getSubjects);

// get all tutors subjects
router.get("/tutorsubject/userId", authUser, authRole(ROLE.TUTOR), getMySubjects);

// get a specific subject
router.get("/:subjectId", authUser, authRole(ROLE.ADMIN), specificSubject);

router.post("/:subjectId/register", authUser, authRole(ROLE.TUTOR), registerForSubject);

// delete a subject
router.delete("/:subjectId", authUser, authRole(ROLE.ADMIN), deleteSubject);

// admin can update a specific subject in  category
router.patch("/:subjectId", authUser, authRole(ROLE.ADMIN), updateSubject);


module.exports = router;