const {
    Transactions
} = require('../models');

const createTransaction = (data) => Transactions.create(data);

const getOneTransaction = (id) => Transactions.findById({
    _id: id,
    is_active: true
});
const getAllTransactions = () => Transactions.find({
    
    is_active: true
}).populate('client');

const updateTransaction = (id, data) => Transactions.findByIdAndUpdate(id, {
    ...data
}, {
    new: true
});
const deleteTransaction = (id) => Transactions.findByIdAndUpdate({
    _id: id,
    is_active: true
}, {
    is_active: false
});

module.exports = {
    createTransaction,
    updateTransaction,
    deleteTransaction,
    getAllTransactions,
    getOneTransaction
};

//preguntas: servicios y esquemas que tienen de communicacion flow? o porque funciona el