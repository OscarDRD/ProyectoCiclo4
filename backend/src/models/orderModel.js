const mongoose =require('mongoose');
const orderSchema = new mongoose.Schema(
    {
        nameClient:{ type: String, required: true, unique: true},
        address:{type: String, required: true},
        description:{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}, //Productos
        priceTotal:{type: Number, required: true}
    },
    {
        timestamps: true,
    }
);
const order = mongoose.model('Order', orderSchema);
module.exports = orderSchema;