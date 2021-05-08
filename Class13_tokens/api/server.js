const express = require('express');
const router = require('./router.const');
const cors = require('cors')

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/api', router)


app.listen(PORT, HOST, () => console.log(`Server is listening on ${HOST}:${PORT}`))