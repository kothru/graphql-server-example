import { ApolloServer } from 'apollo-server'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// https://www.graphql-tools.com/docs/schema-loading#binding-to-http-server
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
const typeDefs = loadSchemaSync('./schema.graphql', {
  loaders: [new GraphQLFileLoader()]
})

import resolvers from './resolvers.js'

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});