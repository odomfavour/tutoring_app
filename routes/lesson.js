const router = require('express').Router();

const {
  tutor_search,
  get_all_tutors,
  get_tutor,
  update_tutor,
  createLesson,
    delete_tutor,
    get_lesson,
    delete_lesson,
  get_all_lessons
} = require("../controllers/lesson");

const { authUser, authRole, authOtherRole, ROLE } = require('./verifyToken')


// const verify = require('../routes/verifyToken')

// search
router.get('tutors/search', authUser, authRole(ROLE.ADMIN), tutor_search)

//get all tutors
router.get('/tutors',authUser, authRole(ROLE.ADMIN), get_all_tutors)

//get all lessons
router.get("/lessons", authUser, authRole(ROLE.ADMIN), get_all_lessons);

// book lesson
router.post("/:userId", authUser, authRole(ROLE.ADMIN) ,createLesson);

// admin get lesson by Id
router.get("/lessons/:lessonId", authUser, authRole(ROLE.ADMIN), get_lesson);

// admin can delete a lesson by id
router.delete("/lessons/:lessonId", authUser, authRole(ROLE.ADMIN), delete_lesson);


router.get('/tutors/:tutorId', authUser, authRole(ROLE.ADMIN), get_tutor)
router.patch('/tutors/:tutorId', authUser, authRole(ROLE.ADMIN), update_tutor)
// router.post('/register', create_tutor)
router.delete('/tutors/:tutorId', authUser, authRole(ROLE.ADMIN),  delete_tutor)



module.exports = router;