// eslint-disable-next-line no-unused-vars
import Next from 'next';

declare global {
  export namespace NodeJS {
    export interface ProcessEnv {
      NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string;
      CLERK_SECRET_KEY: string;
      NEXT_PUBLIC_CLERK_SIGN_IN_URL: string;
      NEXT_PUBLIC_CLERK_SIGN_UP_URL: string;
      NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: string;
      NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: string;
      NEXT_PUBLIC_TINYMCE_API_KEY: string;
      MONGODB_URL: string;
    }
  }
}
