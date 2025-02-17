import { prismaClient } from '@prisma/client';

export const prismaClient = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query"
        },
        {
            emit: "event",
            level: "error",
        },
        {
            emit: "event",
            level: "info",
        },
        {
            emit: "event",
            level: "warning",
        }
    ]
});

prismaClient.on('error', (e) => {
    logger.error(e);
})

prismaClient.on('warn', (e) => {
    logger.warn(e);
})

prismaClient.on('info', (e) => {
    logger.info(e);
})

prismaClient.on('query', (err) => {
    logger.info(e);
})


