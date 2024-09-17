import cors from "cors";
import express, { Application, Request, Response } from "express";
import router from "./app/routes";
import globalErrorHandler from "./app/modules/middleware/globalErrorHandler";
import notFound from "./app/modules/middleware/notFound";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Developer ! App is Running");
});
app.use(globalErrorHandler);
app.use(notFound);

export default app;
