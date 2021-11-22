const db = require('../db')
const queries = require('../db/queries')
const jwt = require('jsonwebtoken')

const registerNewUser = async (data) => {
    const {
        name,
        email
    } = data
    const payload = [name, email.toLowerCase()]
    return db.any(queries.registerUser, payload)
}
const generateToken = async (user) => {
    const token = jwt.sign({
            user_id: user.id,
            email: user.email
        },
        process.env.TOKEN_KEY, {
            expiresIn: '1h',
        }
    )
    return token
}

module.exports = {
    registerNewUser,
    generateToken
}