import http from 'node:http';
import fs from 'node:fs';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// http.createServer(function (req, res) {

//     if (req.url === '/') {
//         fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'})
//             res.end(data)
//         })
//     } else if(req.url === '/about') {
//         fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'})
//             res.end(data)
//         })
//     } else if(req.url === '/contact-me') {
//         fs.readFile(path.join(__dirname, "public", "contact-me.html"), (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'})
//             res.end(data)
//         })
//     } else {
//         fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, {'Content-Type': 'text/html'})
//             res.end(data)
//         })
//     }

// }).listen(8080, () => {
//     console.log('Server is running at http://localhost:8080');
// });



// Express Version:

// const express = require("express");
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact-me.html'))
})

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Server started running at port ${PORT}`)) 

