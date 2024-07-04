import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

http.createServer(function (req, res) {

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
            console.log('homePage found')
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    } else if(req.url === '/about') {
        fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
            console.log('about page found')
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    } else if(req.url === '/contact-me') {
        fs.readFile(path.join(__dirname, "public", "contact-me.html"), (err, data) => {
            console.log('Contact page found')
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    } else {
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
            console.log('404 page')
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }

}).listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});