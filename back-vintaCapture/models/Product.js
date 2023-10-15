const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

        marca: {
            type: String, 
            required: true
        },
        modelo: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        formato_Pel: {
            type: String,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
        foto: {
            type: String,
            required: true
        },
        stock: {
            type: Number,
            required: true
        }
    },
    {
        //* fecha de creacion y fecha de actualizacion
        timestamps: true
    }
)

const Product = mongoose.model('product', productSchema)

module.exports = Product;