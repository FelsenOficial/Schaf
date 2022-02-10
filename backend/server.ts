import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./router";

import "./database/database";

const app = express();
const PORT = 3343;

app.use(express.json());
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }
    return response.status(500).json({
      status: "error",
      message: "Erro Interno Do Servidor",
    });
  }
);
// app.get('/api', (req: any, res: any) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.json({ usuario: 'Gabriel', senha: '123456' });
// });

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
