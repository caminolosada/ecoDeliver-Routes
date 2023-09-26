import { routeMock } from "../mocks/mocks.js";

import getDirections from "./getDirections.js";

describe("Given a getDirections function", () => {
  describe("When it receives a request with a list of valid coordinates", () => {
    test("Then it should return an object with the waypoints of the route", async () => {
      const coordinates = routeMock;
      const expectedResponse = "waypoints";

      const response = await getDirections(coordinates);

      expect(response).toHaveProperty(expectedResponse);
    });
  });
});
