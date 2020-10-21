import { ApolloServer } from 'apollo-server'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

// apollo server
const server = new ApolloServer({
	typeDefs,
	resolvers
})

export default server
