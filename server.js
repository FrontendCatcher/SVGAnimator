const express = require('express')
const app = express()
const port = 1337

// host static files
// app.use('/frontend', express.static('staticServer'))

app.use(express.static('frontend'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))