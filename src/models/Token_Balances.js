const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Token_BalanceSchema = new Schema ({
    btc: {
        type: Number,
        required: true
    },
    eth: {
        type: Number,
        required: true
    },
    xrp: {
        type: Number,
        required: true
    }

    //mxn aquí on en otro módulo?
    
},{
    timestamps: true
});

module.exports = mongoose.model('token_balances', Token_BalanceSchema );