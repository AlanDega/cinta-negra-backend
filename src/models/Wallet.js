const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WalletSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'user',
        unique: true
    //    pregunta: porque unique?
    },

    token_Balances: {
        type: [Schema.Types.ObjectId],
        required: true
    },
    transactions: {
        type: [Schema.Types.ObjectId],
        ref:'transactions',
        required: true
    },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('wallet', WalletSchema);