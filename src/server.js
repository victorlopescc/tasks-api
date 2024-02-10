import http from 'node:http';

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    // Handle JSON

    // Handle Routes

    return res.writeHead(404).end();
});

server.listen(3333);