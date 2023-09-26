import { type ResponseStructure } from "../getDirections/types";

export const routeMock: string[] = [
  "13.428555,52.523219",
  "13.388860,52.517037",
  "13.397634,52.529407",
];

export const responseMock: ResponseStructure = {
  code: "Ok",
  waypoints: [
    {
      distance: 2.226580806,
      name: "Platz der Vereinten Nationen",
      location: [13.428554, 52.523239],
    },
    {
      distance: 4.231521214,
      name: "Friedrichstraße",
      location: [13.388798, 52.517033],
    },
    {
      distance: 2.795148358,
      name: "Torstraße",
      location: [13.39763, 52.529432],
    },
  ],
};
