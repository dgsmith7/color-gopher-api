import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "1.0.0", // by default: '1.0.0'
    title: "Color Gopher API", // by default: 'REST API'
    description: "A color converter and palette generator", // by default: ''
  },
  host: "localhost:5500", // by default: 'localhost:3000'
  basePath: "/", // by default: '/'
  schemes: ["http"], // by default: ['http']
  consumes: ["application / json"], // by default: ['application/json']
  produces: ["application / json"], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: "", // Tag name
      description: "", // Tag description
    },
    // { ... }
  ],
  securityDefinitions: {}, // by default: empty object
  definitions: {}, // by default: empty object
};

const outputFile = "./swagger-output.json";
const routes = ["./app.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen()(outputFile, routes, doc);
