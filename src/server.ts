import dotenv from "dotenv";
import { app } from "./app";
import { createServer } from "http";
dotenv.config();
const PORT = process.env.PORT || 8000;

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log("RUNNING SERVER IN PORT: " + PORT);
});

export { httpServer };
