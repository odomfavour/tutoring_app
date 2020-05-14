const router = require('express').Router();
const {
  createSubject,
  getSubjects,
  specificSubject,
  deleteSubject,
  updateSubject,
  registerForSubject,
  getMySubjects,
  subject_search,
  tutorGetSubject,
  tutorUpdateSubject,
  tutorDeleteSubject,
  getAllTutors
} = require("../controllers/subject");


const { authUser, authRole, ROLE } = require('./verifyToken')



// admin can create a subject
router.post("/:categoryId", authUser, authRole(ROLE.ADMIN), createSubject);

// admin can get all subjects under a category
router.get("/", getSubjects);

// admin can search for subjects in alphabetic order
router.get('/search', authUser, authRole(ROLE.ADMIN), subject_search)

// tutor can get all his subjects
router.get("/tutorsubject/:userId", authUser, authRole(ROLE.TUTOR), getMySubjects);

// students can see all tutors for a subject in a category
router.get("/tutors/:categoryId", authUser, getAllTutors);

//admin can get a specific subject
router.get("/:subjectId", authUser, authRole(ROLE.ADMIN), specificSubject);

// tutor can register for a particular subject
router.post(
  "/:subjectId/register",
  authUser,
  authRole(ROLE.TUTOR),
  registerForSubject
);

// tutor can get a subject he registered for
router.get(
  "tutorsubject/:subjectId",
  authUser,
  authRole(ROLE.TUTOR),
  tutorGetSubject
);

// tutor can update subject
router.patch(
  "tutorsubject/:subjectId",
  authUser,
  authRole(ROLE.TUTOR),
  tutorUpdateSubject
);

// tutor can delete subject
router.delete(
  "tutorsubject/:subjectId",
  authUser,
  authRole(ROLE.TUTOR),
  tutorDeleteSubject
);

// delete a subject
router.delete("/:subjectId", authUser, authRole(ROLE.ADMIN), deleteSubject);

// admin can update a specific subject in  category
router.patch("/:subjectId", authUser, authRole(ROLE.ADMIN), updateSubject);


module.exports = router;