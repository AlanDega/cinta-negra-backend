const UserResolver = require('./UserResolvers');
const TransactionResolver = require('./TransactionResolver');
const {
    EmailAddressResolver,
    URLResolver,
    
} = require('graphql-scalars');

module.exports = {
    EmailAddress: EmailAddressResolver,
    URL: URLResolver,
    Query:{
        ...UserResolver.Query,
        ...TransactionResolver.Query
    },
    Mutation:{
        ...UserResolver.Mutation,
        ...TransactionResolver.Mutation
    }
};
