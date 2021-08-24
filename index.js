const { PubSub } = require('graphql-subscriptions');

const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const mongoose = require("mongoose");

const { MONGODB } = require("./config.js");
const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

const pubsub = new PubSub();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub, endpoint: "/" }),
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    }),
  ],
});

mongoose
  .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected");
    return server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => {
    console.error(err);
  });

//simon
//jjaas226
