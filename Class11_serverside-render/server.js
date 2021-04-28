const express = require('express');
const router = require('./router.const');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/api', router);

app.use((req, res) => {
    // res.status(404).json({
    //     message: 'Page not found!',
    // });

    // path.join('hello', 'from', 'SEDC');
    // 'hello/from/sedc'

    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, HOST, () => {
    console.log("Server listening on http://localhost:3000");
})