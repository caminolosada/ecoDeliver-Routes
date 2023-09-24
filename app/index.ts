import "./loadEnvinronments.js";
import createDebug from "debug";
import chalk from "chalk";

const debug = createDebug("ecoDeliver-Routes:root");

debug(chalk.greenBright("testing debug"));

const osmrConnection: string = process.env.OSMR_CONNECTION!;

if (!osmrConnection) {
  debug(chalk.red("Missing environment variables"));
  process.exit(1);
}
