import swagger from '@src/docs/swagger';
import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    openapi:'3.0.0',
    info: {
      version: "1.0.0",
      title: "inGaia APIS",
      description: "Apis inGaia to calculate the property value",
      contact: {
        name: "Lázaro Simão - Developer",
        phone: "11 99801-5957",
      },
      servers: [`${process.env.HOST}:${process.env.PORT}`]
    },
    paths: swagger
  },
  apis: ["./src/Routes.ts"],
  
};
const swaggerConfig = swaggerJsDoc(swaggerOptions);

export default swaggerConfig;
