import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import http from 'http';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import resolvers from './resolvers';
const prisma = new PrismaClient();
import app from './server';

const typeDefs = readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8');

const port = process.env.PORT || 4000;

export default async function start() {
  // Required logic for integrating with Express
  const httpServer = http.createServer(app);

  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // if (req.user === undefined) {
      //   throw new Error('Unauthenticated User');
      // }
      return { prisma, user: req.user };
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    introspection: true,
  });

  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,

    // By default, apollo-server hosts its GraphQL endpoint at the
    // server root. However, *other* Apollo Server packages host it at
    // /graphql. Optionally provide this to match apollo-server.
    path: '/graphql',
  });

  // Modified server startup
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
}
