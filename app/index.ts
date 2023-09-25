import "./loadEnvinronments.js";
import createDebug from "debug";
import chalk from "chalk";
import getDirections from "./getDirections/getDirections.js";
import { type ResponseStructure } from "./getDirections/types.js";
import { routeMock } from "./mocks/routeMock.js";

const debug = createDebug("ecoDeliver-Routes:root");

const osmrConnection: string = process.env.OSMR_CONNECTION!;

if (!osmrConnection) {
  debug(chalk.red("Missing environment variables"));
  process.exit(1);
}

(async () => {
  const result: ResponseStructure = await getDirections(routeMock);

  debug(chalk.greenBright(`Your request has been: ${result.code}`));
  debug(chalk.bgBlue(`You must follow the route shown below:`));

  result.waypoints.forEach((waypoint) => {
    debug(
      chalk.blue(
        `${waypoint.name} (location: ${String(waypoint.location.toString())})`,
      ),
    );
  });
})();
