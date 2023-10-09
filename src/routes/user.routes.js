const router = require("express").Router();
const {
  getAllUsers,
  getSingleUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", getAllUsers);
router.get("/:email", getSingleUsers);
router.post("/", createUser);
router.patch("/:email", updateUser);
router.delete("/:email", deleteUser);

module.exports = router;
