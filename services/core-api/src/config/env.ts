import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
	PORT: z.coerce.number().int().positive().default(4000),
	NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
	DATABASE_URL: z.url(),
	JWT_SECRET: z.string().min(32),
	JWT_EXPIRY: z.string().default('7d'),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
	console.error('Invalid environment variables:', parsedEnv.error.flatten().fieldErrors)
	throw new Error('Environment validation failed')
}

export const { PORT, NODE_ENV, DATABASE_URL, JWT_SECRET, JWT_EXPIRY } = parsedEnv.data