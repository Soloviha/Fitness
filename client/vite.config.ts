import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'JOJO_fitness',
        short_name: 'J_fit',
        description:
          'Занимайтесь спортом где угодно и когда угодно с нашим инновационным приложением для онлайн-тренировок. Приложение предоставляет доступ к разнообразным программам, адаптированным под ваши цели и уровень подготовки. Ваш путь к здоровью и фитнесу начинается здесь!',
        icons: [
          {
            src: '/photo-output.PNG',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/logo.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        start_url: '/',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#000000',
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
            handler: 'CacheFirst', // Cache images for offline access
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 50, // Max 50 images in cache
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
          {
            urlPattern: /^https:\/\/api\.yourdomain\.com\/.*$/,
            handler: 'NetworkFirst', // Prioritize network, fallback to cache
            options: {
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
      '/img': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
      },
    },
  },
});
