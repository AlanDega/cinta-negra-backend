const {
    getAllTransactions,
    getOneTransaction
} = require('../../services/TransactionService');

const getTransactions = async () => {
    const transactions = await getAllTransactions().populate('author');
    return transactions;
};

const getSingleTransaction = async (_, params) => {
    const transaction = await getOneTransaction(params.id);
    if (!transaction) throw new Error('Transaction does not exist');
    return transaction;
};

module.exports = {
    getTransactions,
    getSingleTransaction
};