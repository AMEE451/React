const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()

const genereateToken = async (data) => {
  try {
    let token = await jwt.sign(data, process.env.private_key)
    return token;
  } catch (error) {
    throw new Error("could not create token: " + error)
  }
};

const hashPassword = async (password) => {
  let hash = await bcrypt.hash(password, 20)
  return hash;
};

const compare = async (hash, password) => {
  return await bcrypt.compare(password, hash)
};

module.exports = { genereateToken, compare, hashPassword }