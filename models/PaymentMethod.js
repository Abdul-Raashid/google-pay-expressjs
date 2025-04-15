// models/PaymentMethod.js
const mongoose = require('mongoose');

const PaymentMethodSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  paymentMethodId: { // Unique ID for the payment method
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['card', 'upi', /* other types */],
    required: true,
  },
  details: { // Store sensitive details securely (consider encryption)
    type: Object,
    required: true,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('PaymentMethod', PaymentMethodSchema);