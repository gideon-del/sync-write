import http from "http";
import app from "./app";
import { config } from "dotenv";
config();
const server = http.createServer(app);

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Application listing at ${PORT}`);
});
