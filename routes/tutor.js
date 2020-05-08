const router = require('express').Router();

const { tutor_search, get_all_tutors, get_tutor, update_tutor, create_tutor, delete_tutor } = require('../controllers/tutor')


const verify = require('../routes/verifyToken')

// search
router.get('/search', verify, tutor_search)

//get all tutors
router.get('/', verify, get_all_tutors)

router.get('/:tutorId', verify, get_tutor)
router.patch('/:tutorId', verify, update_tutor)
router.post('/register', create_tutor)
router.delete('/:tutorId', verify, delete_tutor)



module.exports = router;