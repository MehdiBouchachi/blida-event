const http = require("http");
const next = require("next");

// Read environment variables (set by CMD or NSSM)
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";

// Create Next.js app
const app = next({ dev });
const handle = app.getRequestHandler();

// Start server
app
  .prepare()
  .then(() => {
    http
      .createServer((req, res) => {
        handle(req, res);
      })
      .listen(port, "0.0.0.0", () => {
        console.log(
          `> Next.js running in ${dev ? "development" : "production"} mode on http://localhost:${port}`
        );
      });
  })
  .catch((err) => {
    console.error("❌ Failed to start server:", err);
    process.exit(1);
  });
