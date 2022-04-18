declare global {
    namespace NodeJS {
      interface ProcessEnv {
        HJID: integer;
        HJSV: integer;
        GADS: string;
        GTM: string;
        GA: string;
        GOOGLE_SERVICE_ACCOUNT_EMAIL: string;
        GOOGLE_PRIVATE_KEY: string;
        GSHEET_ID: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}

