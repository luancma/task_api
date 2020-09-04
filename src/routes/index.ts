import { Router, Request, Response } from 'express';

const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  response.json({
    message: "ok"
  })
})

export default routes;
