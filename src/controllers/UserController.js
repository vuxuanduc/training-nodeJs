const connection = require("../config/database");
const {
  getAllUsersService,
  addUserService,
  getUserId,
  updateUserService,
  deleteUserService,
} = require("../services/CRUDServices");

const listUsers = async (req, res) => {
  let results = await getAllUsersService();
  return res.render("manager_user", { users: results });
};

const detailUser = (req, res) => {
  return res.render("detail_user");
};

const addUser = (req, res) => {
  return res.render("create");
};

const postUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  await addUserService(email, name, city);
  return res.redirect("/");
};

const viewUpdateUser = async (req, res) => {
  let user_id = req.params.user_id;
  let dataUser = await getUserId(user_id);
  let user = dataUser && dataUser.length > 0 ? dataUser[0] : {};
  // console.log(dataUser);
  return res.render("edit", { user: user });
};

const updateUser = async (req, res) => {
  let id = req.body.id;
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  await updateUserService(id, email, name, city);
  return res.redirect("/");
};

const deleteUser = async (req, res) => {
  let id = req.body.id;
  await deleteUserService(id);
  return res.redirect("/");
};

module.exports = {
  listUsers,
  addUser,
  postUser,
  viewUpdateUser,
  updateUser,
  deleteUser,
  detailUser,
};
