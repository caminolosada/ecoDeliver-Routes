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
): Promise<ResponseStructure | undefined> => {
  try {
    const response = await axios.get<ResponseStructure>(
      `${apiUrl}${coordinates.join(";")}`,
    );

    const myDirections = response.data;

    return myDirections;
  } catch (error) {
    if (error instanceof AxiosError) {
      const status = error.response?.status;
      if (status === 400) {
        const directionsError = new CustomError(
          `Bad Request: ${error.message}`,
          statusCodes.badRequest,
          `${messages.directionsError}`,
        );

        debug(chalk.redBright(directionsError));
        throw directionsError;
      } else {
        const generalError = new CustomError(
          `Network Error: ${error.message}`,
          statusCodes.generalError,
          `${messages.generalError}`,
        );
        debug(chalk.redBright(generalError));
        throw generalError;
      }
    }
  }
};

export default getDirections;
