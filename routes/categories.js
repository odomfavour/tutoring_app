const router = require("express").Router();
const { categories, oneCategory, specificCategory, deleteCategory, updateCategory} = require('../controllers/category')
const verify = require('../routes/verifyToken')

// router.get('/', categories)

router.post("/", oneCategory);

// router.post("/:categoryId", createSubject);

// get a specific category
router.get('/:categoryId', verify,specificCategory)


// Delete a specific category
router.delete("/:categoryId", deleteCategory)

// update a specific category
router.patch("/:categoryId", updateCategory)




module.exports = router;