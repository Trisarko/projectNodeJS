let express = require('express')
let bodyParser = require('body-parser') //cuando hagamos peticiones (http rest) 
const mongoose = require('mongoose') // api acceda a la BD con el métdo de conexión

/**
 * Product 
 * import the Shema
 */

const Product = require('./models/product')

let app = express()
const port = process.env.PORT || 3000

/**
 * middlewares
 */

 app.use(bodyParser.urlencoded({extended: false}))
 app.use(bodyParser.json())


 app.post('/api/product', (req, res) =>{
     console.log('POST /api/product')
     console.log(req.body)

     let product = new Product()
     product.name =  req.body.name
     product.price = req.body.price
     product.category = req.body.category
     product.image = req.body.image

     product.save((err, productStored) =>{
         if(err) res.status(500).send({message: `save error: ${err}`})
         res.status(200).send({product: productStored})
     })
 })

 app.get('/api/product', (req, res) => {
    //res.send(200, {products: []})

    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({
            message: `Error when requesting: ${err}`
        })

        if (!products) return res.status(404).send({
            message: 'There are no product'
        })

        res.status(200).send({ products })

    })

})

//get one 
app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({
            message: `Error when requesting: ${err}`
        })
        
        if (!product) return res.status(404).send({
            message: 'Product does not exist'
        })

        res.status(200).send({ product })
    })
})

//put
app.put('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    let updateData = req.body

    Product.findByIdAndUpdate(productId, updateData, (err, productUpdated) => {
        if (err) return res.status(500).send({
            message: `Failed to update data: ${err}`
        })

        res.status(200).send({ product: productUpdated })
    })

})

//delete
app.delete('/api/product/:productId', (req, res) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({
            message: `Error deleting: ${err}`
        })
        
        if (!product) return res.status(404).send({
            message: 'Product does not exist'
        })

        product.remove(err => {
            if (err) return res.status(500).send({
                message: `Error deleting: ${err}`
            })

            res.status(200).send({
                message: 'Product removed'
            })
        })
    })

})


 mongoose.connect('mongodb://localhost:27017/shopwcg', (err, res) =>{
     if(err) throw err
     console.log('datebase conection ok')
     const server = app.listen( port,() =>{
         console.log( `Listening http://localhost:${server.address().port}`)
     })
 })