namespace NodeJS {
    interface ProcessEnv {
      SECRET_API_KEY: string;
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }