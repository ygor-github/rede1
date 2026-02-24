import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.WHATSAPP_NUMBER': JSON.stringify(env.WHATSAPP_NUMBER),
      'process.env.LEAD_WEBHOOK_URL': JSON.stringify(env.LEAD_WEBHOOK_URL),
      'process.env.LEAD_WEBHOOK_TOKEN': JSON.stringify(env.LEAD_WEBHOOK_TOKEN)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
  };
});
