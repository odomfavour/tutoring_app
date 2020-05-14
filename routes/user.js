const router = require('express').Router();

const {
    allUsers,
    oneUser,
    delUser,
    updateUser
} = require("../controllers/user");

const { authUser, authRole, ROLE } = require('./verifyToken')



router.get("/", authUser, authRole(ROLE.ADMIN), allUsers);
router.get("/:userId", authUser, authRole(ROLE.ADMIN),oneUser);
router.delete("/:userId", authUser, authRole(ROLE.ADMIN), delUser);
router.patch("/:userId", authUser, authRole(ROLE.ADMIN), updateUser);



module.exports = router;