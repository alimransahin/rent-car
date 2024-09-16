import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
const PORT = 5000;
let server: Server;

async function bootstrap() {
  try {
    await mongoose.connect;
  } catch (error) {}
  server = app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}
bootstrap();
