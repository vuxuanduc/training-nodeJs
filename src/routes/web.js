const express = require("express");
const {
  listUsers,
  addUser,
  postUser,
  viewUpdateUser,
  updateUser,
  deleteUser,
  detailUser,
} = require("../controllers/UserController");
const router = express.Router();

router.get("/", listUsers);

router.get("/them-nguoi-dung", addUser);
router.post("/them-nguoi-dung", postUser);
router.get("/sua-nguoi-dung/:user_id", viewUpdateUser);
router.post("/sua-nguoi-dung", updateUser);
router.post("/xoa-nguoi-dung", deleteUser);
router.get("/chi-tiet-nguoi-dung", detailUser);

module.exports = router;
