const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const database = process.argv[2];

    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the list of our students\n');

        countStudents(database)
            .then((output) => {
                res.end(output);
            })
            .catch((error) => {
                res.end(error.message);
            });
    }
});

app.listen(1245);

module.exports = app;
