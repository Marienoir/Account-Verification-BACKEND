const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

const {
    createUser,
    makeRequest
} = require('../controller')
const {
    createUserSchema
} = require('../middleware/schema')
const validateData = require('../validation')

const router = express.Router()

router.post(
    "/register",
    validateData(createUserSchema, 'body'),
    createUser
)
router.get(
    "/account-verification/:account_number/:bank_code",
    makeRequest
)
module.exports = router