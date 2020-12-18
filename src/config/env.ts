import { config } from 'dotenv';

switch(process.env.NODE_ENV ) {
  case "test":
    config({ path: "./.env.test" });
    break;

  case "development":
    config({ path: "./.env.development" });
    break;
}