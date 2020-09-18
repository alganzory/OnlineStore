const mongoose = require ("mongoose");


const DB_URL= "mongodb://localhost:27017/online-store";

const productSchema = mongoose.Schema ({
    name: String,
    img: String,
    price: Number,
    description: String
})
const Product = mongoose.model ("product", productSchema)

exports.getAllProducts = ()=> {

    // we are creating our custome promise so we can contol 
    // when it will be resolved so we are ultimately able 
    // to return the products as well as disconnect the db
    return new Promise ((resolve, reject )=> {
         // connect to DB
        mongoose.connect (DB_URL)
        .then (() => {Product.find().
            then (products => {
                mongoose.disconnect();
                resolve (products);
            }).catch (err => reject (err))
        })    
    })  
}