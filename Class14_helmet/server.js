const express = require('express');
const app = express();

const users = [
    {
        email: "jondoe@gmail.com",
        UID: "12345",
    },
    {
        email: 'janedoe@outlook.com',
        UID: '23465',
    },
    {
        email: 'stevesmith@yahoo.com',
        UID: '34562'
    }
]

app.use(express.json());
app.use(express.urlencoded({extended: false}));


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.get('/users', (req, res) =>{
    res.status(200).json(users);
})

app.listen(PORT, HOST, () => {
    console.log('Server is active at http://localhost:3000');
});