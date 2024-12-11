import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@img': path.resolve(__dirname, './src/img'),
        }
    },
    build: {
        target: 'es2022'
    },
    server: {
        proxy: {
           '/api': 'https://146e-50-235-214-83.ngrok-free.app/api'
        }
    }
})