import http from 'node:http';
import url from 'node:url';
import fs from 'node:fs';
import EventEmitter from 'node:events';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)

http.createServer(function (req, res) {
    console.log(req)
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
            console.log('homePage found')
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(data)
        })
    }

}).listen(8080, () => {
    console.log('Server is running at http://localhost:8080');
});