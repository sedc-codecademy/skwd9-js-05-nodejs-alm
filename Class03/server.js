const http = require('http');
const { v4: uuidv4 } = require('uuid');
const textService = require('./textService');

const server = http.createServer((req, res) => {
    const url = req.url;
    // e.g. URL bank/user01/balance
    // e.g. METHOD GET
    const method = req.method; // GET/POST/PUT/DELETE
    console.log(url, method);

    console.log('req-header', req.headers);
    console.log('res-header', res.headers);

    // CORS
    /* 
    By default, you're not allowed to make requests from different origins.
    An origin is an object made up of the HOST + PORT
    So by default, if you try to send a request from origin http://localhost:5500
    to http://localhost:3000 you need to tell the response that it's allowed to 
    respond to that origin.
    */
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    if (url === '/reviews') {
        if (method === 'GET') {
            // 1. Get the data from the DB
            const text = textService.readDataFromDb('db.json');
            // 2. Set the header (Content-Type)
            res.setHeader('Content-Type', 'text/html');
            // 3. Send the data
            res.write(text);
            // 4. End the connection
            res.end();
        }
        if (method === 'POST') {
            /* 
            When data is sent through the internet, 
            it is being split into chunks of data.
            This data has to be assembled and parsed on arrival.
            */

            /*
            Requests in NodeJS have an .on() method that listen to different kinds of events.
            Every time a chunk of data arrives at it's destination an event called data is fired.
            NodeJS is able to listen to this event, and fire off a callback function. Works exactly like 
            .addEventListener() on the front end.
            */
            const body = [];
            req.on('data', (chunk) => {
                body.push(chunk);
            })

            /*
            Another type of event is end.
            End is an event that is fired when all the data chunks 
            have arrived at the destination. 
            */

            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const review = JSON.parse(parsedBody);
                review.id = uuidv4();

                const dbData = textService.readDataFromDb('db.json');
                const dbDataObject = JSON.parse(dbData);

                dbDataObject.reviews.push(review);
                const dbDataStringified = JSON.stringify(dbDataObject);

                textService.writeDataToDb('db.json', dbDataStringified);
            })

            res.setHeader('Content-Type', 'text/html');
            res.write('123123');
            res.end();
        }
    }

    // e.g How to make a simple response
    // const text = 'Hello from SEDC';
    // res.setHeader('Content-Type', 'text/html');
    // res.write(text);
    // res.end();
});

server.listen(3000, ()=> {
    console.log('Server is active at http://localhost:3000');
});
