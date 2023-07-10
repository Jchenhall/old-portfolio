import { Default } from "@/enums/enums";
import { N } from "./number-util";

interface LogInUtility {
  verify: (pin: string) => Promise<boolean>;
}

export const LogInUtility: LogInUtility = {
  verify: async (pin: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (pin === Default.PIN) {
          resolve(true);
        } else {
          reject(`Invalid pin: ${pin}`);
        }
      }, N.rand(300, 700));
    });
  },
};
