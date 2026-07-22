import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html', 'json-summary'],
            thresholds: {
                statements: 60,
                branches: 60,
                functions: 60,
                lines: 60
            }
        }
    }
});