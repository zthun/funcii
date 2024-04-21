import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './vitest.config.ts',
  './packages/helpful-internet/vite.config.ts',
  './packages/helpful-brands/vite.config.ts',
  './packages/helpful-query/vite.config.ts',
  './packages/helpful-fn/vite.config.ts',
  './packages/helpful-validation/vite.config.ts',
  './packages/helpful-node/vite.config.ts',
  './packages/helpful-react/vite.config.ts'
]);
