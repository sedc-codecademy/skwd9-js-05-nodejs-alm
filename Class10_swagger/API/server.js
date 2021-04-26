const express = require('express');
const cors = require('cors');
const router = require('./router.const');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerDocument = require('./swagger.json');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(router);

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            version: "1.0.0",
            title: 'Inventory app',
            description: 'App for storing food data.'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: ['./routes/*.js']
}

// With JSON config
// app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

// With JS Doc
const swaggerDoc = swaggerJsDoc(swaggerOptions)
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

app.listen(PORT, HOST, () => {
    console.log('Server is listening at http://localhost:3000');
})