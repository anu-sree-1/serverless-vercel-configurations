import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  res.status(200).send("Hello, Vercel 12");
});

app.get("/route2", async (req: Request, res: Response) => {
  res.status(200).send("called route 2");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export const config = { maxDuration: 30 };
export default app;