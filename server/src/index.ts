import server from './server'
import pino from 'pino'

const logger = pino()
// start the server
server.listen({ port: 4000 }, () => {
	logger.info(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
})
