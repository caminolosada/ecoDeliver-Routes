import axios, { AxiosError } from "axios";
import { debug } from "console";
import chalk from "chalk";
import { type ResponseStructure } from "./types";
import CustomError from "../server/CustomError/CustomError.js";
import messages from "../server/utils/messages/messages.js";
import statusCodes from "../server/utils/statusCodes/statusCodes.js";

export const apiUrl: string = process.env.OSMR_CONNECTION!;

const getDirections = async (
  coordinates: string[],
): Promise<ResponseStructure> => {
  try {
    const response = await axios.get<ResponseStructure>(
      `${apiUrl}${coordinates.join(";")}`,
    );

    const myDirections = response.data;

    return myDirections;
  } catch (error) {
    const directionsError = new CustomError(
      `Bad Request: ${error.message}`,
      statusCodes.badRequest,
      `${messages.directionsError}`,
    );

    const generalError = new CustomError(
      `Network Error: ${error.message}`,
      statusCodes.generalError,
      `${messages.generalError}`,
    );

    if (error instanceof AxiosError) {
      let serviceError = generalError;
      const status = error.response?.status;

      if (status === 400) {
        serviceError = directionsError;
      }

      debug(chalk.redBright(serviceError));

      throw serviceError;
    }

    throw generalError;
  }
};

export default getDirections;
