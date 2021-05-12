const firebase = require('firebase');

const config = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-messagingSenderId",
    appId: "your-appId",
    measurementId: "your-measurementId"
};

const app = firebase.initializeApp(config);

if (!process.firebase) {
    process.firebase = app;
} else {
    console.log('Firebase connection already established!');
}

module.exports = app;