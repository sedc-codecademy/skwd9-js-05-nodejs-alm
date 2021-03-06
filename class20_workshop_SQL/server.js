const express = require('express');
const router = require('./common/const/router.const')
const cors = require('cors')
const helmet = require('helmet');
const cookieParser = require('cookie-parser')
const session = require('./common/const/session.const')
const db = require('./common/database/db.config')

const app = express();

app.use(helmet())
app.use(cors())
app.use(session)
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0'

app.use('/api', router)

app.listen(PORT, HOST, async () => {

    try {
        await db.sync({ force: true })
        await db.authenticate();
        console.log('Connected to the database!')
    } catch (error) {
        console.log('Unable to connect to the database!', error)
    }

    console.log('Server running on http://localhost:3000')
})