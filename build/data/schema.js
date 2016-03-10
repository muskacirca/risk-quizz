'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Schema = exports.Viewer = undefined;

var _graphql = require('graphql');

var _graphqlRelay = require('graphql-relay');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Viewer = exports.Viewer = function (_Object) {
    _inherits(Viewer, _Object);

    function Viewer() {
        _classCallCheck(this, Viewer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Viewer).apply(this, arguments));
    }

    return Viewer;
}(Object);

function getViewer() {
    return new Viewer();
}

/**
 * The first argument defines the way to resolve an ID to its object.
 * The second argument defines the way to resolve a node object to its GraphQL type.
 */

var _nodeDefinitions = (0, _graphqlRelay.nodeDefinitions)(function (globalId) {
    var _fromGlobalId = (0, _graphqlRelay.fromGlobalId)(globalId);

    var id = _fromGlobalId.id;
    var type = _fromGlobalId.type;

    if (type === "Viewer") {
        console.log("Im here getting viewer");
        return getViewer(id);
    }
    return null;
}, function (obj) {
    if (obj instanceof Viewer) {
        console.log("getting by object ViewerType");
        return GraphQLViewer;
    }
    return null;
});

var nodeInterface = _nodeDefinitions.nodeInterface;
var nodeField = _nodeDefinitions.nodeField;


var GraphQLViewer = new _graphql.GraphQLObjectType({
    name: 'Viewer',
    fields: function fields() {
        return {
            id: (0, _graphqlRelay.globalIdField)('Viewer')
        };
    },
    interfaces: [nodeInterface]
});

var GraphQLRoot = new _graphql.GraphQLObjectType({
    name: 'Root',
    fields: {
        viewer: {
            type: GraphQLViewer,
            resolve: function resolve() {
                return getViewer;
            }
        },
        node: nodeField
    }
});

var Schema = exports.Schema = new _graphql.GraphQLSchema({
    query: GraphQLRoot
});