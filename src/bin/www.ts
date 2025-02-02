// import app from 'app';

import chalk from "chalk";
import debugLib from "debug";
import http from "http";
import { AddressInfo } from "net";

import app from "../app";

const debug = debugLib("blog-project:server");

const normalizePort = (val: string): number | string | boolean => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
/**
 *
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */
const onError = (error: NodeJS.ErrnoException): void => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
/**
 * Event listener for HTTP server "listening" event.
 */
const onListening = (): void => {
  const addr = server.address();
  const bind =
    addr === "string" ? `pipe ${addr}` : `port ${(addr as AddressInfo)?.port}`;
  debug(`Listening on ${bind}`);
};

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
  console.log(chalk.bgGrey(`Server running on port ${port}`));
});
server.on("error", onError);
server.on("listening", onListening);
