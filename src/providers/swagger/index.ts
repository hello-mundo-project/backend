import swaggerAutogen from "swagger-autogen";

const swaggerGenerator = swaggerAutogen({ openapi: "3.0.0" });

const options = {
  openapi: "3.0.0",
  info: {
    title: "This is my ApI Document",
    description: "게시글 관리 api 서버"
  },
  servers: [{ url: `http://localhost:${process.env.MUNDO_SERVER_PORT}` }],
  schemes: ["http"]
};

const outputFile = "./swagger-output.json";
const endpointsFiles = ["../../routes/*.ts"];

swaggerGenerator(outputFile, endpointsFiles, options);
