const http = require('http');
const { getProducts, getProductById, createProduct, updateProduct, removeProduct } = require('./controllers/product.controller')

const server = http.createServer((req, res) => {
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<h1>Hello Earth</h1>')
    // res.end()
    // ============ OR ====================
    if (req.url === '/api/products' && req.method === 'GET'){
        // res.writeHead(200, {'Content-Type': 'application/json'})
        // res.end(JSON.stringify(products))
        getProducts(req, res);
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3]
        getProductById(req, res, id)
    } else if(req.url === '/api/products' && req.method === 'POST'){
        createProduct(req, res)
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT'){
        const id = req.url.split('/')[3]
        updateProduct(req, res, id)
    } else if(req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'DELETE'){
        const id = req.url.split('/')[3]
        removeProduct(req, res, id)
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({ message: 'Route Not Found!' }))
    }
});

const PORT = process.env.PORT || 6222;

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
