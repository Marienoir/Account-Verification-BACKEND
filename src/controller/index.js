const {
    registerNewUser,
    generateToken
} = require("../services")
const axios = require('axios')
const verifyEmail = require("../utils")
const createUser = async (req, res, next) => {
    try {
        const {
            body
        } = req
        await registerNewUser(body)
        const token = await generateToken(body)
        await verifyEmail(body,token)
        res.status(201).json({
            status: "Created",
            code: 201,
            message: "User Registered Successfully",
            data: token
        })
    } catch (error) {
        return next(error)
    }
}

async function makeRequest(req, res) {
    const { params: {account_number, bank_code} } = req

    const config = {
        method: 'get',
        url: `https://api.paystack.co/bank/resolve?account_number=${account_number}&bank_code=${bank_code}`,
        headers: {
            'Authorization': `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
        }
    }
    let result = await axios(config)
    res.send(result.data)
}

module.exports = {
    createUser,
    makeRequest
}