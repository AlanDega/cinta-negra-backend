const { Users } = require('../models');

const createUser = (data) => Users.create(data);

const getOneUser = (id) => Users.findById({_id: id, is_active:true}).populate('transactions');
const getAllUsers = () => Users.find({is_active:true}).populate('transactions');
const getUserByEmail = (email) => Users.findOne({email, is_active:true});
const updateUser = (id, data) => Users.findByIdAndUpdate(id,{...data},{ new:true });
const deleteUser = (id) => Users.findByIdAndUpdate({_id:id, is_active: true},{is_active:false});

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
    getOneUser,
    getUserByEmail
};
