declare global {
    namespace NodeJS {
      interface ProcessEnv {
        HJID: integer;
        HJSV: integer;
        GADS: string;
        GTM: string;
        GA: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}

