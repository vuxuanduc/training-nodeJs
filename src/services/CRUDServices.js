const connection = require("../config/database");

const getAllUsersService = async () => {
  let [results, fields] = await connection.query("SELECT * FROM users u");
  return results;
};

const addUserService = async (email, name, city) => {
  let [results, fields] = await connection.query(
    ` INSERT INTO users(email, name, city) VALUES(?, ?, ?)  `,
    [email, name, city]
  );
};

const getUserId = async (user_id) => {
  let [results, fields] = await connection.query(
    `SELECT * FROM users WHERE id = ?`,
    [user_id]
  );
  return results;
};

const updateUserService = async (id, email, name, city) => {
  let [results, fields] = await connection.query(
    `UPDATE users SET email = ?, name = ?, city = ? WHERE id = ?`,
    [email, name, city, id]
  );
};

const deleteUserService = async (user_id) => {
  let [results, fields] = await connection.query(
    `DELETE FROM users WHERE id = ?`,
    [user_id]
  );
};

module.exports = {
  getAllUsersService,
  addUserService,
  getUserId,
  updateUserService,
  deleteUserService,
};
