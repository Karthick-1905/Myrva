import app from './app'
import { PORT } from './config/env'; 
import { checkDB } from './utils/db.utils';



const startServer = async () => {
    try {
        await checkDB(); 

        const server = app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`)
        });

        const shutdown = (signal: NodeJS.Signals) => {
            console.log(`Received ${signal}. Shutting down gracefully...`)
            server.close(() => {
                process.exit(0)
            })
        }

        process.on('SIGINT', () => shutdown('SIGINT'))
        process.on('SIGTERM', () => shutdown('SIGTERM'))

    } catch (err) {
        console.error("Failed to start server:", err)
        process.exit(1)
    }
}

startServer();