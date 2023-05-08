import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  plugins: [react(
    {
        include: "**/*.jsx",
    }
  )],
  esbuild: {
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
  },
  css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/styles/global/_Variables.scss" as *;
            @use "@/styles/global/_Mixins.scss" as *;
          `
        }
      },
      modules: {
        localsConvention: 'camelCaseOnly',
      },
  },
  server:{
    port: 8595,
  }
})
