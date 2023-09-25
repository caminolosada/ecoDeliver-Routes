export interface ResponseStructure {
  code: string;
  waypoints: WaypointStructure[];
}

export interface WaypointStructure {
  distance: number;
  name: string;
  location: number[];
}
