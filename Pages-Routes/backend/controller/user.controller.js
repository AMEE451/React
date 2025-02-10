const User = require("../model/user.model")
const { hashPassword, genereateToken } = require("../utils/helper")

const signup = async (req, res) => {
    let user = await User.findOne({ email: req.body.email })
    if (user) {
        return res.status(403).send({ msg: "user already exists" })
    }
    req.body.password = await hashPassword(req.body.password)
    user = await User.create(req.body)
    let token = await genereateToken({
        id: user.id,
        name: user.name,
        role: user.role
    })
    return res.status(201).send({ user, token })
}

const login = async (req, res) => {
    const { email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (!user) {
        return res.status(403).send({ msg: "user not found" })
    }

    let isMatch = await compare(user.password, password);
    if (!isMatch) {
        return res.status(403).send({ msg: "invalid password" })
    }

    let token = await genereateToken({
        id: user.id,
        name: user.name,
        role: user.role
    });
    return res.status(201).send({ user, token })
}

const getAllUsers = async (req, res) => {
    let users = await User.findAll()
    res.status(200).send(users)
}

module.exports = { signup, login, getAllUsers }