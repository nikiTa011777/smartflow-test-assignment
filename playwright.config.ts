import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();


export default defineConfig({
  testDir: './tests',
  timeout: 60000,     
  retries: 0,         

  use: {
    headless: false,                
    baseURL: process.env.BASEURL 
    
  },
});
