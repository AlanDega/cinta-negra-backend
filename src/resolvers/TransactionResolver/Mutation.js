const {
    createTransaction,
    updateTransaction,
    deleteTransaction
} = require('../../services/TransactionService');
const storage = require('./../../utils/storage');

const createNewTransaction = async (_, { data }, { user }) => {
    data.user = user._id;
    console.log(user);
    if (data.cover_photo){
        const { createReadStream } = await data.cover_photo;
        const stream = createReadStream();
        const image = await storage({stream});
        data = { ...data, cover_photo: image.url};
    }

    const transaction = await createTransaction(data);
    user.transactions.push(transaction._id);
    user.save();
    return transaction;
};

const updateOneTransaction = async (_, {id,data}, { user }) => {
    const transaction = await updateTransaction(id, data);
    if (data.cover_photo){
        const { createReadStream } = await data.cover_photo;
        const stream = createReadStream();
        const image = await storage({stream});
        data = { ...data, cover_photo: image.url, user};
    }
    if (!transaction) throw new Error('Transaction does not exist');
    return transaction;
};

const deleteOneTransaction = async (_, { id }, { user }) => {
    const transaction = await deleteTransaction(id, user);
    if (!transaction) throw new Error('Transaction not exist');
    return 'Transaction deleted';
};

module.exports = {
    createNewTransaction,
    updateOneTransaction,
    deleteOneTransaction
};

//preguntas: diferencia entre resolvers y services 

// cambie un auhtior por un user checar que no se cinfudna ppor la otrea variable 