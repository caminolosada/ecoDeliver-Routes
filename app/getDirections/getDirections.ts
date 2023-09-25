import axios from "axios";
import { type ResponseStructure } from "./types";

export const apiUrl: string = process.env.OSMR_CONNECTION!;

const getDirections = async (
  coordinates: string[],
): Promise<ResponseStructure | undefined> => {
  const response = await axios.get<ResponseStructure>(
    `${apiUrl}${coordinates.join(";")}`,
  );
  const myDirections = response.data;

  return myDirections;
};

export default getDirections;
