import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';
import svgr from '@svgr/rollup';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),

    process?.env?.NODE_ENV === 'production' &&
      sentryVitePlugin({
        org: process.env.SENTRY_ORG,
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
        telemetry: false,
      }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/styles/abstracts/variables.scss";
          @import "src/styles/abstracts/mixins.scss";
          @import "src/styles/base/typography.scss";
          @import "src/styles/layout/flex.scss";
        `,
      },
    },
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    target: 'ES2022',
    cssMinify: true,
    sourcemap: true,
    minify: 'esbuild',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
  },
});
