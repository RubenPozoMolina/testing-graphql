import express from 'express';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';

export class Application {

    public expressApplication: express.Application;

    constructor() {
        // Construct a schema, using GraphQL schema language
        const schema = buildSchema(`
        type Query {
        hello: String
        }
        `);

        // The root provides a resolver function for each API endpoint
        const rootValue = {
            hello: () => 'Hello world!',
        };

        this.expressApplication = express();
        this.expressApplication.use(
            '/graphql',
            graphqlHTTP({
                schema,
                rootValue,
                graphiql: { headerEditorEnabled: true },
            }),
        );
    }

    async start() {
        this.expressApplication.listen(4000);
        console.log('Running a GraphQL API server at http://localhost:4000/graphql');
    }
}