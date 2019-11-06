const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    
    // verifications:{
    //     type:Number
    // },
    // verified_by:{
    //     type: [Schema.Types.ObjectId],
    //     ref: 'user',
    // },
    is_active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('transactions', TransactionSchema);