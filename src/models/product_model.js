const { Schema , model } = require("mongoose")

const ProductModel = new Schema({
    name : {
        type : String,
    },
    masp : {
        type : String,
    },
    series : {
        type : String,
    },
    status : {
        type : String,
    },
    slug :{
        type : String,
    },
    ordering : {
        type : Number,
    },
    quantity : {
        type : Number,
    },
    price : {
        type : Number,
    },
    link_shopee : {
        type : String,
    },
    link_ytb : {
        type : String,
    },
    sale_price : {
        type : Number,
    },
    content : {
        type : String,
    },
    arrCheck : [
        String,
    ],
    avatar : [
        String,
    ],
    id_category : {
        type : String,
    },
    id_group_category : {
        type : String,
    }
},{
    timestamps : true
})


module.exports = model('products' , ProductModel)