const express = require('express');
const app = express();
const helmet = require('helmet');

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

// [Helmet Configs]

// [X-Powered-By]
app.use(helmet.hidePoweredBy());

// [Frameguard & Clickjacking]
// https://owasp.org/www-community/attacks/Clickjacking
app.use(helmet.frameguard({
    action: 'deny',
}));

// [X-Download-Options]
// https://www.nwebsec.com/HttpHeaders/SecurityHeaders/XDownloadOptions
// https://www.netsparker.com/whitepaper-http-security-headers/#XDownloadOptionsHTTPHeader
app.use(helmet.ieNoOpen());

// [Content/MIME Sniffing]
// https://en.wikipedia.org/wiki/Content_sniffing
app.use(helmet.noSniff());

// [Content Security Policy]
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
app.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
        "font-src": "https://fonts.googleapis.com/",
        "frame-ancestors": "none",
        "img-src": "example.com/images",
        "script-src": 'self'
    },
}));
// app.use(helmet.noCache()); You can use the nocache module instead.

// [DNS Preferch]
// To improve performance, most browsers prefetch DNS records for the links in a page. 
// In that way the destination ip is already known when the user clicks on a link. 
// This may lead to over-use of the DNS service (if you own a big website, visited by millions people…), 
// privacy issues (one eavesdropper could infer that you are on a certain page), 
// or page statistics alteration (some links may appear visited even if they are not). 
// If you have high security needs you can disable DNS prefetching, at the cost of a performance penalty.
app.use(helmet.dnsPrefetchControl({
    allow: false,
}));

// [XSS Attacks]
// https://owasp.org/www-community/attacks/xss/
// https://www.acunetix.com/blog/web-security-zone/test-xss-skills-vulnerable-sites/
// https://www.thesslstore.com/blog/everything-you-need-to-know-about-cross-site-scripting-attacks/
app.use(helmet.xssFilter());

// https://www.somesite/page.html?default=<script>alert('do something bad')</script>

// fetch('myurl.com', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'plain/html'
//     },
//     body: JSON.stringify(data)
// });

app.get('/', (req, res) =>{

    // const query = `SELECT * FROM dbo.Users WHERE UserID = ${userID}`; // 5; DROP DATABASE;
    // SELECT * FROM dbo.Users WHERE UserID = 5; DROP DATABASE;
    // const result = db.execute(query);
    // res.status(200).json(result)

    res.status(200).json(users);
});

app.post('/', (req, res) => {

    const data = req.body;

    // Simple sanitization technique
    const stringified = JSON.stringify(data);
    const hacked = stringified.includes('<script>');
    if (!hacked) {
        users.push(data);
        res.status(200).json({
            message: 'Well done!',
        })
    };
})

app.listen(PORT, HOST, () => {
    console.log('Server is active at http://localhost:3000');
});


