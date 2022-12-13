const Product = require('../model/products.model')

async function getProducts(req, res){
    try{
        const products = await Product.findAll()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch(error){
        console.log(error)
    }
}

async function getProductById(req, res, id){
    try{
        const product = await Product.findById(id)
        if(!product){
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Available!'}))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch(error){
        console.log(error)
    }
}

async function createProduct(req, res){
    try{
        const product = {
            title: 'HP Folio 9480m',
            description: 'My current laptop',
            price: '~300k Naira'
        }
        
        const newProduct = await Product.create(product)

        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newProduct))

    } catch(error){
        console.log(error)
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
}