const router = require("express").Router();
const { signUp, logIn } = require("../controllers/auth");
router.get("/", (req, res) => {
  res.send("This is the express app");
});

router.post('/signup', signUp)

//Login 
router.post('/login', logIn)


module.exports = router;
