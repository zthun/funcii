import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsConfigPaths()],
  test: {
    environment: 'node',
    testTimeout: 30000,
    coverage: {
      provider: 'istanbul'
    }
  }
});
