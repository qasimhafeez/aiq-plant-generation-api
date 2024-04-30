import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import plantRoutes from "./routes/plantRoutes";

const app = express();
const port = 6005;

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("root dir");
});

app.use("/api/plants", plantRoutes);

// 404 Error Handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({
    status: 404,
    error: "Not Found",
    message: "The requested resource was not found on this server.",
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
