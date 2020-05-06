const router = require("express").Router();
const { categories, oneCategory, specificCategory, deleteCategory, updateCategory, searchTutors} = require('../controllers/category')
const verify = require('../routes/verifyToken')

router.get('/', categories)

router.post("/", oneCategory);
router.post("/search", searchTutors);
// router.post("/:categoryId", createSubject);

// get a specific post
router.get('/:categoryId', specificCategory)


// Delete a specific category
router.delete("/:categoryId", deleteCategory)

// Delete a specific category
router.patch("/:categoryId", updateCategory)




module.exports = router;