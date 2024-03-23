const httpServer = require('http-server');

const server = httpServer.createServer({
    root: './public' // Path to your static website files
});

const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
