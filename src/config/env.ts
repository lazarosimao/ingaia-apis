import { config } from 'dotenv';

switch(process.env.NODE_ENV ) {
  case "test":
    config({ path: "./.env.test" });
    break;

  case "local":
    config({ path: "./.env.local" });
    break;

  case "production-local":
    config({ path: "./.env" });
    break;
}