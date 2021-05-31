const express = require('express');
const router = require('./common/const/router.const')
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0'

app.use('/api', router)

app.listen(PORT, HOST, () => console.log('Server running on http://localhost:3000'))