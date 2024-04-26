const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const qdb = require('./queries')
const cors = require('cors')


const PORT = process.env.PORT || 

app.use(cors())

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (req,res,next) => {
    res.json({info: 'Node.js, Express, and Postgres API'})
})

app.get('/users', qdb.getUsers)
app.get('/users/:id', qdb.getUserById )
app.post('/users', qdb.createUser)
app.put('/users/:id', qdb.updateUser)
app.delete('/users/:id', qdb.deleteUser)

app.listen(PORT, () => {
    console.log(`Server is listenig on http://localhost:${PORT}`)
})