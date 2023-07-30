declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // FRONTEND
      APP_NAME: string;
      API_URL: string;
      SESSION_SECRET: string;

      // BACKEND
      LOG_LEVEL: 'debug' | 'info' | 'warn' | 'error';
      API_PORT: string;
      API_HOST: string;
      DB_TYPE: 'postgres';
      DB_HOST: string;
      DB_PORT: number;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_SSL: boolean;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;

      // SHARED
      NODE_ENV: 'development';
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
    }
  }
}

export {};
