import { ApolloServer } from "@apollo/server";
import { User } from "./user";
import { Item } from "./item";

async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: `
            type Query {
                ${User.queries}
            }
            type Mutation {
               ${User.mutations}
               ${Item.mutations}
            }
        `,
    resolvers: {
        Query: {
          //add items queries here
        ...User.resolvers.queries,
      },
      Mutation: {
        //add items mutations here
        ...User.resolvers.mutations,
        ...Item.resolvers.mutations,
      },
    },
  });

  // Start the gql server
  await gqlServer.start();

  return gqlServer;
}

export default createApolloGraphqlServer;