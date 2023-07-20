require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

require('./config/mongoose.config')

app.use(express.json(), express.urlencoded({extended: true}), cors())


const routes = require('./routes/author.routes')
routes(app)

app.listen(8000, () => console.log('Server Online'))
