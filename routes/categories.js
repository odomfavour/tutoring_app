const router = require("express").Router();
const {
  categories,
  oneCategory,
  specificCategory,
  deleteCategory,
  updateCategory,
  allUsers,
  oneUser,
  delUser,
  subjectByCategory
} = require("../controllers/category");
const { authUser, authRole, ROLE } = require('./verifyToken')
const User = require('../models/user')

router.get("/", categories);

router.post("/", oneCategory);

// router.post("/:categoryId", createSubject);
//get all subjects under a category populated
router.get("/:categoryId", subjectByCategory);
// get a specific category
router.get('/:categoryId', authUser, authRole(ROLE.ADMIN), specificCategory)


//admin Delete a specific category
router.delete("/:categoryId", authUser, authRole(ROLE.ADMIN), deleteCategory)

//admin update a specific category
router.patch("/:categoryId", authUser, authRole(ROLE.ADMIN), updateCategory)




module.exports = router;