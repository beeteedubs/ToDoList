const PORT = process.env.PORT ?? 8000

const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    try {

    } catch {
        console.error(error)
    }
})

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));