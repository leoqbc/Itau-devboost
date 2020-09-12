import express from "express";
import { Application, Request, Response } from "express-serve-static-core";

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    return res.json({
        msg: "Docker com typescript!"
    });
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
    console.log('Server inicializado com sucesso. ' + 'na porta: ' + port);
});