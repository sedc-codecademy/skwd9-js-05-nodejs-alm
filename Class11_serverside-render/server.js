const express = require('express');
const router = require('./router.const');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use('/api', router);

// [404 Page]
app.use((req, res) => {
    // res.status(404).json({
    //     message: 'Page not found!',
    // });

    // path.join('hello', 'from', 'SEDC');
    // 'hello/from/sedc'

    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    const img = 
    'https://images.unsplash.com/photo-1598398386929-4d5370672e9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=626&q=80'
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        imgSrc: img
    })
});

app.listen(PORT, HOST, () => {
    console.log("Server listening on http://localhost:3000");
})