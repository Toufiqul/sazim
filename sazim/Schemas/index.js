// all the queries and mutations
const graphql = require('graphql');
const {GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList} = graphql;

const {PrismaClient} = require("@prisma/client")
const prismaClient = new PrismaClient();

const UserType = require("./TypeDefs/UserType")

// const userData= require("../MOCK_DATA.json");


const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
        getAllUsers: {
            type: new GraphQLList(UserType),
  
        // resolve: ()=> userData  or
        resolve(parent,args){
            return prismaClient.getRootQuery
        }
        }
    }

    
    })

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser:{
            type: UserType,
            args: {
                firstName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString}
            },
            resolve(parent,args){
                
                prismaClient.user.create({
                    id: 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password
                })
                return args
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery , mutation: Mutation})