import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema
} from 'graphql'

import {
    connectionArgs,
    connectionDefinitions,
    connectionFromPromisedArray,
    connectionFromArray,
    fromGlobalId,
    globalIdField,
    nodeDefinitions,
    mutationWithClientMutationId,
    cursorForObjectInConnection,
    offsetToCursor
} from 'graphql-relay'


export class Viewer extends Object {}
function getViewer() {
    return new Viewer();
}

/**
 * The first argument defines the way to resolve an ID to its object.
 * The second argument defines the way to resolve a node object to its GraphQL type.
 */
var { nodeInterface, nodeField } = nodeDefinitions(
    (globalId) => {
        let { id, type } = fromGlobalId(globalId);
        if (type === "Viewer") {
            console.log("Im here getting viewer")
            return getViewer(id);
        }
        return null;
    },
    (obj) => {
        if (obj instanceof Viewer) {
            console.log("getting by object ViewerType")
            return GraphQLViewer
        }
        return null
    }
);

var GraphQLViewer = new GraphQLObjectType({
    name: 'Viewer',
    fields: () => ({
        id: globalIdField('Viewer')
    }),
    interfaces: [nodeInterface]
});

var GraphQLRoot = new GraphQLObjectType({
    name: 'Root',
    fields: {
        viewer: {
            type: GraphQLViewer,
            resolve: () => getViewer
        },
        node: nodeField
    }
});

export var Schema = new GraphQLSchema({
    query: GraphQLRoot
});
