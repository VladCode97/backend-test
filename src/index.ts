import { createExpressServer } from "routing-controllers";
import "reflect-metadata";
import { config } from "dotenv";
import { UserView } from "./views/user.view";
import { yamlHandler } from "./utils/handler/yaml.handler";
import { setup, serve } from "swagger-ui-express";
import { NextFunction, Request, Response } from "express";
import { TaskView } from "./views/task.view";

config();

export async function main() {
  await yamlHandler();
  const server = createExpressServer({
    controllers: [UserView, TaskView],
    classTransformer: false,
    validation: {
      always: false,
    },
    cors: "*",
  });
  server.use(
    "/swagger",
    async (request: Request, response: Response, next: NextFunction) => {
      next();
    },
    serve,
    setup(await yamlHandler())
  );
  server.listen(Number(process.env.PORT), () =>
    console.log(`http://localhost:${Number(process.env.PORT)}`)
  );
}

main();
