import "../loadEnvinronments.js";
import { rest } from "msw";
import { routeMock } from "./mocks.js";
import { responseMock } from "./mocks.js";
import messages from "../server/utils/messages/messages.js";

export const handlers = [
  rest.get(
    `http://router.project-osrm.org/route/v1/driving/${routeMock.join(";")}`,
    async (_req, res, ctx) => res(ctx.status(200), ctx.json(responseMock)),
  ),
];

export const errorHandlers = [
  rest.get(
    `http://router.project-osrm.org/route/v1/driving/${routeMock.join(";")}`,
    async (_req, res, ctx) =>
      res(
        ctx.status(400),
        ctx.json({ publicMessage: `${messages.directionsError}` }),
      ),
  ),

  rest.get(
    `http://router.project-osrm.org/route/v1/driving/${routeMock.join(";")}`,
    async (_req, res, ctx) =>
      res(
        ctx.status(500),
        ctx.json({ publicMessage: `${messages.generalError}` }),
      ),
  ),
];
