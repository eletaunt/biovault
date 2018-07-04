const { GraphQLServer } = require('graphql-yoga')
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { mocks } = require('./mocks');

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  mocks: mocks
});

const options = {
  port: 8000,
  endpoint: '/graphql'
}

server.start(options, (options: any) =>
  console.log(`Server is running on localhost ${options.port}`)
);