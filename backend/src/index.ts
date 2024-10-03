import { Hono } from "hono";
// import { withAccelerate } from '@prisma/extension-accelerate'
// import { PrismaClient } from '@prisma/client/edge'
// import { sign, verify } from 'hono/jwt';
import { userRouter } from "./routes/user";
import { blogRoute } from "./routes/blog";
import { cors } from "hono/cors";
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SEC: string;
  };
}>();
app.use("/*", cors());
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRoute);
export default app;
