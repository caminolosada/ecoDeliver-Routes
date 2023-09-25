export interface ResponseStructure {
  code: string;
  routes: RouteStructure[];
  waypoints: WaypointStructure[];
}

export interface RouteStructure {
  geometry: string;
  legs: any[];
  weight_name: string;
  duration: number;
  distance: number;
}

export interface WaypointStructure {
  hint: string;
  distance: number;
  name: string;
  location: any[];
}
