const express = require('express')

router = new express.Router()

router.get('/', (req, res) => {
    res.send({
        "message": "This is a test message!"
    })
})

module.exports = router