const queries = {
    registerUser: `
    INSERT INTO users (
        name,
        email
    ) VALUES ($1,$2)
    RETURNING *
     `
}

module.exports = queries