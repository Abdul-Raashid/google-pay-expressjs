// models/Transaction.js
const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  paymentMethodId: {
    type: String, // Reference to the payment method used
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: 'INR', // Example default currency
  },
  status: {
    type: String,
    enum: ['pending', 'success', 'failed', 'refunded'],
    default: 'pending',
  },
  // Add details specific to the Google Pay transaction
  googlePayDetails: {
    type: Object,
  },
}, { timestamps: true });

module.exports = mongoose.model('Transaction', TransactionSchema);