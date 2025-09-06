import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './jules-scratch/verification',
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
