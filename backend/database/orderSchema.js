import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
   {
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User',
      },
      orderItems: [
         {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            price: { type: Number, required: true },
            image: { type: String, required: true },
            product: {
               type: mongoose.Schema.Types.ObjectId,
               required: true,
               ref: 'Product',
            },
         },
      ],
      shippingAddress: {
         address: { type: String, required: true },
         city: { type: String, required: true },
         postalCode: { type: String, required: true },
         country: { type: String, required: true },
      },
      paymentMethod: {
         type: String,
         required: [true, 'Payment method is required'],
      },
      paymentResult: {
         id: { type: String },
         status: { type: String },
         updateTime: { type: String },
         emailAddress: { type: String },
      },
      taxPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },
      shippingPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },
      totalPrice: {
         type: Number,
         required: true,
         default: 0.0,
      },
      isPaid: {
         type: Boolean,
         default: false,
         required: true,
      },
      paidAt: {
         type: Date,
      },
      isDelivered: {
         type: Boolean,
         default: false,
         required: true,
      },
      deliveredAt: {
         type: Date,
      },
   },
   { timestamps: true },
   {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
   }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
