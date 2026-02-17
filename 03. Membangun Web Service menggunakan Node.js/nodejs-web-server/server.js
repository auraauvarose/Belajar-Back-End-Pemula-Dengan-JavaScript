import http from 'http';

const requestListener = (request, response) =>{
    response.setHeader('Content-type', 'text/html');
    response.statusCode = 200;
    
    const { method } = request;

    if(method === 'GET') {
        response.end('<h1>hallo jokowi</h1>');
    }

    if(method === 'POST') {
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk);
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`);
        });

    }

    // if(method === 'PUT') {
    //     response.end('<h1>Halo Sandiaga Uno</h1>');
    // }

    // if(method === 'DELETE') {
    //     response.end('<h1>Halo Anies Baswedan</h1>');
    // }


};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});


// curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dimas\"}"
// output: <h1>Hai, Dimas!</h1>