import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode }) => {
    const envFiles = ['.env', `.env.${mode}`]
    return {
        plugins: [react()],
        envFile: envFiles,
        // Spécifier explicitement dans votre configuration Vite les variables d'environnement que vous souhaitez rendre disponibles dans votre application.
        // define: {
        //     'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
        //     'process.env.DEV': JSON.stringify(process.env.DEV),
        //     'process.env.MODE': JSON.stringify(process.env.MODE),
        //     'process.env.PROD': JSON.stringify(process.env.PROD),
        //     'process.env.SSR': JSON.stringify(process.env.SSR),
        // },
    }
})
