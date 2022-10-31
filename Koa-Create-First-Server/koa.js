const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/index", (ctx) => {
  ctx.body = "<h1>Welcome to Index Page</h1>";
  ctx.status = 200;
});
router.get("/about", (ctx) => {
  ctx.body = "<h1>Welcome to About Page</h1>";
  ctx.status = 200;
});
router.get("/communication", (ctx) => {
  ctx.body = "<h1>Welcome to Communication Page</h1>";
  ctx.status = 200;
});

app.use(router.routes());
const port = 3000;

app.listen(port, () => {
  console.log(`Server is working on ${port}`);
});
